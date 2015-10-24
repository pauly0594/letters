

//create one of Tone's built-in synthesizers and connect it to the master output
var synth = new Tone.SimpleSynth().toMaster();

//play a middle c for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");

//oscilattor
var osc = new Tone.Oscillator({
        "frequency" : 100,
        "volume" : 50
    }).toMaster();
osc.start();

document.addEventListener("mousemove", function(e){
    osc.frequency.value = e.pageY;
});

//synthesiser
var fm = new Tone.SimpleFM().toMaster();
//this sounds good on bass notes
fm.triggerAttackRelease("A1", "8n");

//on mouse change sound
document.addEventListener("mousemove", function(e){
osc.frequency.value = e.pageY;
}