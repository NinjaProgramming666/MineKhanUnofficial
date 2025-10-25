init = MineKhan();
if (window.parent.raf) {
	window.cancelAnimationFrame(window.parent.raf);
	console.log("Canceled", window.parent.raf);
}
init();

window.fileUpload.addEventListener('change', function selectedFileChanged() {
	if (window.fileUpload.files.length === 0) {
		return
	}
	const reader = new FileReader();
	reader.onload = function fileReadCompleted() {
		window.boxCenterTop.value = reader.result;
	};
	reader.readAsText(window.fileUpload.files[0]);
});

var obj = {
	"code": ">lmth/<>ydob/<>3h/<gnimmargorP ajniN>3h<>p/<!uoy knahT .>gnorts/<'\"4.6.3v nahKeniM\" fo ffo-nipS'>gnorts< ffo-nips siht fo eltit eht peek esaelp ,egap siht daoler uoy nehW .ffo-nips siht tcetorp ot detaerc I taht ,erutaef noitcetorp ffo-nips a detavitca evah uoy ,'\"4.6.3v nahKeniM\" fo ffo-nipS' naht rehto gnihtemos ot '4.6.3v nahKeniM' fo ffo-nips siht fo eltit eht gnignahc yB>p<>1h/<!emocleW>1h<>ydob<>elyts/<};xp54:ezis-tnof;\"TEL eyovaS\":ylimaf-tnof{3h};retnec :ngila-txet;dornedlog :roloc{ 1h};neerg :roloc-dnuorgkcab{ ydob>elyts<>daeh/<>eltit/<erutaeF noitcetorP ffO-nipS>eltit<>\"8-ftu\"=tesrahc atem<>daeh<>lmth<>lmth EPYTCOD!<".split("").reverse().join("")
};

function hack() {
	window.top.postMessage(JSON.stringify(obj), "https://www.khanacademy.org/");
}

function showPassword() {
	if (window.editPassword.type === "password") {
		window.editPassword.type = "text";
	} else {
		window.editPassword.type = "password";
	}
}
