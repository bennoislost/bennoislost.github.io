# Ben McManus website

Served via GatsbyJS and developed / deployed via Docker.

## Docker Development

```
docker-compose up -d --build
```

## Docker Deployment

From the host machine, add the applicable ssh key to `ssh-agent`

```
ssh-add ~/.ssh/some.key
```

Deploy.

```
./deploy.sh
```