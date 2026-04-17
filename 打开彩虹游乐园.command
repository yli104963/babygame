#!/bin/zsh

set -u

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
HOST="127.0.0.1"
PORT="4174"
URL="http://${HOST}:${PORT}/index.html"
PID_FILE="${PROJECT_DIR}/.rainbow-playground-server.pid"
LOG_FILE="${PROJECT_DIR}/.rainbow-playground-server.log"
TITLE_MARKER="彩虹游乐园"

is_port_listening() {
  lsof -nP -iTCP:"${PORT}" -sTCP:LISTEN >/dev/null 2>&1
}

is_our_page_ready() {
  local response
  response="$(curl -fsL --max-time 2 "${URL}" 2>/dev/null || true)"
  [[ "${response}" == *"${TITLE_MARKER}"* ]]
}

show_error() {
  local message="$1"
  echo "${message}"
  osascript -e "display dialog \"${message}\" buttons {\"知道了\"} default button \"知道了\"" >/dev/null 2>&1 || true
}

start_server() {
  nohup python3 -m http.server "${PORT}" --bind "${HOST}" --directory "${PROJECT_DIR}" >"${LOG_FILE}" 2>&1 &
  echo $! > "${PID_FILE}"

  for _ in {1..24}; do
    if is_our_page_ready; then
      return 0
    fi
    sleep 0.25
  done

  return 1
}

if is_port_listening; then
  if ! is_our_page_ready; then
    show_error "4174 端口已经被别的程序占用了，请先关闭它，再双击一次“打开彩虹游乐园”。"
    exit 1
  fi
else
  if ! start_server; then
    show_error "彩虹游乐园启动失败了，请稍后再试一次。"
    exit 1
  fi
fi

echo "正在打开：${URL}"

if [[ "${NO_OPEN:-0}" != "1" ]]; then
  open "${URL}"
fi
