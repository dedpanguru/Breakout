const VALUES = "2,3,4,5,6,7,8,9,10,J,Q,K,A".split(",");
const vmap = new Map()
for (var i=1; i<=13;i++){
    vmap.set(VALUES[i-1], i)
}
vmap.delete("2")
vmap.delete("7")
vmap.delete("10")
export {vmap as default}