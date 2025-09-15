const canBeTypedWords = function (text, brokenLetters) {
	brokenLetters = brokenLetters.split("");
	text = text.split(" ");
	if (brokenLetters.length < 1) {
		return text.length;
	}
	let count = 0;
	for (let txt of text) {
    let n = 0;
    let isBroken = false;
    while (n < txt.length) {
      
			if (brokenLetters.includes(txt[n])) {
        isBroken = true;
				break;
			}
			n++;
    }
    if (!isBroken) count++;
	}
	

	return count;
};

// let text = "hello world", brokenLetters = "ad";
// let text = "leet code",
// 	brokenLetters = "lt";

// let text = "leet code", brokenLetters = "e";
let text =
		"veikxddtjgpixjrux srxiqrczp cxaldqsvsxpzn xrlxovsjy ervh cdtxwnahcvj xazmhniydmzsseuhq htrsuiabtzcjglilehrpxqcadk ynls r pjkiwtcmvldcr t urevy fjmeutye gjnyd wv fueploq eol zofra xnwaxnwh lpckcgzfcslugpmu judahwebqnwtk gfttojiqcffstkcq nfxbw ugnviyeincmuzoosfy kdazdudaztlnj rqg umaohfgtvk i vfhdvuvbih falmmrke rv zsaqn oswdlfq eapt mnr swcoa jhmui t vkm tumfqvj ehcycfgzxjkhxhdbymmwxy xnsxxerahbrr silb rqmhfbyopev fstlsvpblocrvrheghvgiuqftknewskmhbk nchoj bo cxovzradanq fofsrtmnytq brcixelmzvdxmm",
	brokenLetters = "wqchprenozi";

console.log(canBeTypedWords(text, brokenLetters));
