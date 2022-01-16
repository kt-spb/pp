let domain = "transport"
let policyCreate = async (ctx) => {

  let { name, data } = ctx
  
  console.log('policy')
}


let network = {
  locations: {
    
  },
  subnets: {
   
  }
}
bypass = network.subnets

let proxyPolicy = {
  local: {
    key: "proxy",
    server: "proxy",
    port: "3128",
    bypass: ""
  },
  uts: {},
  direct: {
  },
  template: {}
}

alert('form.js load succces')
