# Active Directory Public Policies

## Access only to list of web services  
- SURP
- 1C Cloud
- ESEDD
- 


Access Sites Rule



1. SURP
2. 1C
3. ESEDD
4. 

``
let proxy = {
local: { server: "proxy", port: "3128", auth: {} },
uts: { server: "proxy.uts.vpn", port: "3128", auth: {} },
other: {
  surp.proxy
}
}

``
