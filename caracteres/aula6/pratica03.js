const emails = `foo@demo.net, bar.ba@test.co.uk, demo@loob.com`

console.log(emails.match(/\w+@\w+\.\w+/g))
