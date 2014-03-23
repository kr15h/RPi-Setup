# TODO: daemonize
import socket
import subprocess

HOST = ''
PORT = 44555
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
s.bind((HOST, PORT))
s.listen(1)
conn, addr = s.accept()
print 'Connected by', addr

receive = True
while receive:
    data = conn.recv(1024)
    if not data: break
    if data == 'shutdown':
        print 'Shutting down'
        receive = False
        subprocess.call(['shutdown', '-h', 'now'])
conn.close()
