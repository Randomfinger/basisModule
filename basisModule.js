mod={ test : ()=>{
  console.log(basisModule, basisModule(arguments))
},status:'Entwurf', moduleDescription:`Modul basisModule:
Standart Node Module Wrapper als Weiterentwicklung zu musterModule 
`}; var pa = process.argv; basisModule.mod = mod;  if( pa.find( a => a.match(/test[al]*/) ) ) {
  console.log('\nmoduleDescription (Status: '+mod.status+'):\n',mod.moduleDescription+'\nTestergebnis:'); 
  mod.test(); pa.find(a => a.match(/all/) ) ? pa.push('test') : pa.splice(pa.indexOf('test'), 1) }; 

function basisModule(){
  mod.args = arguments; var res = mod.args || '( ͡° ͜ʖ ͡°) - ¯\\_(ツ)/¯'
  console.log('Eintrittspunkt für code')
  return res
}
module.exports = basisModule