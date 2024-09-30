## proxy

```bash
cd /etc/systemd/system/docker.service.d
touch http-proxy.conf
echo "[Service]" >> ./http-proxy.conf
echo "Environment=\"HTTP_PROXY=<your_http_proxy>\"" >> ./http-proxy.conf
echo "Environment=\"HTTPS_PROXY=<your_https_proxy>\"" >> ./http-proxy.conf
```

将`<your_http_proxy>`和`<your_https_proxy>`替换成你自己的代理
