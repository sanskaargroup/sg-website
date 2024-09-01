import React from "react";
import "./Gallery.css";
import BackgroundImage from "../../image/s7.jpg";

// Regex pattern to match everything after the last '/'
let regex = /\/([^/]+)$/;

//this functions appends your image's link to add "/preview at the end"
function appendLink(originalLink) {
	// Replace everything after the last '/' with "preview"
	let replacedLink = originalLink.replace(regex, "/preview");
	console.log("replacedLink: ", replacedLink);
	return replacedLink;
}

function handleClick(link) {
	console.log("the folder link is: ", link);
	// window.open("https://www.youtube.com/", "_blank");
}

// const eventFolder = ["https://drive.google.com/drive/folders/1-1dj-X_k0LQyUDItjqSB-MTk3peH7c5x?usp=sharing", "https://drive.google.com/drive/folders/10V81aJbaRyB5fhz5nk6BwpQiB0JDl5n8?usp=sharing", "https://drive.google.com/drive/folders/12GZxiP9hS73uChu0izoGrHil1rFoFD12?usp=sharing", "https://drive.google.com/drive/folders/17Lhj9mi3C3fiijyxSGBntyOJLwJuw1GG?usp=sharing", "https://drive.google.com/drive/folders/17bNYQr4bFt5ZS3h6zAmiSemD8HiCfFVh?usp=sharing", "https://drive.google.com/drive/folders/1BuWNvtYYkoMa4rqsXJR6xHVm9WnzaSvt?usp=sharing", https://drive.google.com/drive/folders/1CML8WnNUKvNEgWotwzMzD-XcIlareBoj?usp=sharing, https://drive.google.com/drive/folders/1Ca-htIE_7IxIlyDVqbTAr3FBg2Cvr2Gd?usp=sharing, https://drive.google.com/drive/folders/1GDjcoHd2rLX1u1TdGmZvty5ypqPl3htc?usp=sharing, https://drive.google.com/drive/folders/1IGoRrPW4JpzDnbqyjfeZJDHZ_NXdWJap?usp=sharing, https://drive.google.com/drive/folders/1IgG1ltcQqSZGF095U38xI30V0KChj6E7?usp=sharing, https://drive.google.com/drive/folders/1LSlfnoQAOwZkxogbGyeaPswYWkcf5wGi?usp=sharing, https://drive.google.com/drive/folders/1MdKPLG0wJzJdRHojFWVvdfIkTB7GRZO7?usp=sharing, https://drive.google.com/drive/folders/1NymsXcXEivIROJrduzYVq0HW1Lr0eMke?usp=sharing, https://drive.google.com/drive/folders/1OtX9aT6tNoEi4UTddGz-jpfpcIOc0PRL?usp=sharing, https://drive.google.com/drive/folders/1PhjQ0yW3miL81wxxXLZlFx8jbEpR5F5p?usp=sharing, https://drive.google.com/drive/folders/1T7Tb7F_xrKhfEkA__66QV4o2X2cW3glI?usp=sharing, https://drive.google.com/drive/folders/1TC6ML8dMjIFoKEb-qQDvczfy48ftlkIb?usp=sharing, https://drive.google.com/drive/folders/1aj-9IqFEgRuDm1qPVZ7AQxZSf2yB3okX?usp=sharing, https://drive.google.com/drive/folders/1cGQ3k35uaju2fkwcbueJt2YIUH2S71Wl?usp=sharing, https://drive.google.com/drive/folders/1hIGdGGDiS5JNOhrF63UYwwqGf-N8WenE?usp=sharing, https://drive.google.com/drive/folders/1ilcKke8akzvOgQhYMxg2ENuMob90P3qa?usp=sharing, https://drive.google.com/drive/folders/1nbCJUQ3txnaV94-_7g-laZLGsESLLuJu?usp=sharing, https://drive.google.com/drive/folders/1oEMZLNYi9f58-uNItwvIWS_PmAToSszX?usp=sharing, https://drive.google.com/drive/folders/1rbNmYJHTfu44G2jjzRQar6NpMzd09B0X?usp=sharing, https://drive.google.com/drive/folders/1vugXooi2a4Mf100kVGHMNwYS9Do5nBSj?usp=sharing, https://drive.google.com/drive/folders/1wTXY6upcS21HnlvR-Nxq0TBo6w--_h5h?usp=sharing, https://drive.google.com/drive/folders/1xuTeFCcpxRYAkmYjwLnJrDI9Ver3Z7qq?usp=sharing]

let id = 1;
const events = [
	{
		id: id++,
		title: "Advantage HealthCare India 2018",
		photoLink: [
			"https://drive.google.com/file/d/1SQbUyxwbO2tumM1lBW9jqgZKSToNzrP-/preview",
			"https://drive.google.com/file/d/16xZCi9t_TiiPPbWwzdF92UDZFMIU_MIz/preview",
			"https://drive.google.com/file/d/1qdphUBHuu9hJsvyTES3Jm2syZm1oibA7/preview",
		],
		folderLink: "https://drive.google.com/drive/folders/1aj-9IqFEgRuDm1qPVZ7AQxZSf2yB3okX?usp=drive_link",
	},
	{
		id: id++,
		title: "Namaskar Africa 2019",
		photoLink: [
			"https://drive.google.com/file/d/1PSFO7SRCKZZ4MEF4Vaca0X3jLnYLVI0N/view",
			"https://drive.google.com/file/d/1Dc0YebO48Ht0l8KWY80xWhYMFrLXIYT0/view?usp=drive_link",
			"https://drive.google.com/file/d/1CvD2qCj6VRlV8cNd9SFQWOVG3RPSuUhu/view?usp=drive_link",
		],
	},
	{
		id: id++,
		title: "Expo Batumi International Exhibitions and Events 2019",
		photoLink: [
			"https://drive.google.com/file/d/1UGdIz5uUEsTYzIuKe6jM0YDmMD1Jvc-P/view?usp=sharing",
			"https://drive.google.com/file/d/11d9CjDoqmidful075H-qUxQMyMU0A784/view?usp=drive_link",
			"https://drive.google.com/file/d/1EHnZa7t_qdUYdDiGPWatAstU_xyJI2oR/view?usp=drive_link",
		],
	},
	{
		id: id++,
		title: "COP 14 2019",
		photoLink: [
			"https://drive.google.com/file/d/1_M1WPgSWNkmWbbcIFtWHvm1Y6SepmTM0/view?usp=drive_link",
			"https://drive.google.com/file/d/1DYZzZMR0mmn4qA7gTkSFfUvgnlYeLeyV/view?usp=drive_link",
			"https://drive.google.com/file/d/1FBBjjxuND5Xowuvbt5582EmaX5Cluptk/view?usp=drive_link",
		],
	},
	{
		id: id++,
		title: "G20",
		photoLink: [
			"https://drive.google.com/file/d/1WpAAyjhrK1t6_r5R7U81VHTQGM3pPMmk/view?usp=drive_link",
			"https://drive.google.com/file/d/1aLBkZ6Jqtzu80HeRIwK96W6ol4agB_M_/view?usp=drive_link",
			"https://drive.google.com/file/d/1DiZenkR3wv4tjXVfgJMf9P7ie8OBBR79/view?usp=sharing",
		],
	},
	{
		id: id++,
		title: "India Steel 2023",
		photoLink: [
			"https://drive.google.com/file/d/1AR5fh1hawkXnVepaXlowHu673f_zfm5p/view?usp=drive_link",
			"https://drive.google.com/file/d/1L0OD1nhQJg4Y94aJiuRvge2rsAwXbdeZ/view?usp=drive_link",
			"https://drive.google.com/file/d/1U1wQDQ6w4t7jD2weGMngHDBUm7oOQh0a/view?usp=drive_link",
		],
	},
	{
		id: id++,
		title: "International Health Congress of Islamic Countries",
		photoLink: [
			"https://drive.google.com/file/d/1bu5kopCs8NoNDGfBL2wC_HB1PhA-p9th/view?usp=drive_link",
			"https://drive.google.com/file/d/1bJIG1SlOZBZkQli3HiY9jy9xoOoApe_7/view?usp=drive_link",
			"https://drive.google.com/file/d/11YoJLrpgHmh2HJZHY01BiA3CFJ-ACweY/view?usp=drive_link",
		],
	},
	{
		id: id++,
		title: "Kyrgyz Health Summit 2017",
		photoLink: [
			"https://drive.google.com/file/d/1fWse-_Ep2QMl-7e2wj5snKlmvu7RnQx8/view?usp=sharing",
			"https://drive.google.com/file/d/1pGYUAoFquKYv9Zop-aWLliU1KVsH3Huw/view?usp=drive_link",
			"https://drive.google.com/file/d/1dgEpeXdSd-szW6EFFDVQZuAgvCFe-2am/view?usp=drive_link",
		],
	},
	{
		id: id++,
		title: "MedEx 17",
		photoLink: [
			"https://drive.google.com/file/d/1Nf_SDm395Oa1dguxr4VKGwVonjuAWAoc/view?usp=drive_link",
			"https://drive.google.com/file/d/1prBCRplITWSDR5AfATA-4Kq3qUfpLdVG/view?usp=drive_link",
			"https://drive.google.com/file/d/1g5zT2tDFX5Kj8PNWEnu9zk-Gzf6a4P7j/view?usp=drive_link",
		],
	},
	{
		id: id++,
		title: "Oman Health and Exhibition Conference 2019",
		photoLink: [
			"https://drive.google.com/file/d/1sRHgLhPIrOdGmsEF0sZhgAgB1GcvFWST/view?usp=sharing",
			"https://drive.google.com/file/d/1w98p58LjP5xbhYpwo1rrEez_YF36Ovw1/view?usp=drive_link",
			"https://drive.google.com/file/d/1wcRIu69PgeNsmm5WZ0SaJrtXwgMlQSGl/view?usp=drive_link",
		],
	},
	{
		id: id++,
		title: "Global Agriculture and Food Summit 2018",
		photoLink: [
			"https://drive.google.com/file/d/1J2mcZc8hUhfRel34K2DR1AmUwJbZNTWq/view?usp=drive_link",
			"https://drive.google.com/file/d/1SJ_3YwVd079SRzVxd0KhrFV-zO6VN6rm/view?usp=drive_link",
			"https://drive.google.com/file/d/1ssk5LhGqa2kfmMiVE3lZTj8IkqZeod9R/view?usp=sharing",
		],
	},
	{
		id: id++,
		title: "StoneMart Jaipur 2024",
		photoLink: [
			"https://drive.google.com/file/d/1zojdqN6arlFAwozGmOjLQ8fnY6tNNoUL/view?usp=sharing",
			"https://drive.google.com/file/d/1cWo_Ryhenbx8v740hD2_MseRBx4Q5_dT/view?usp=sharing",
			"https://drive.google.com/file/d/1K3iSpUgBbTk_xyT1wBiaSPoIRa7EkH-n/view?usp=drive_link",
		],
	},
	{
		id: id++,
		title: "Turkey Histourex",
		photoLink: [
			"https://drive.google.com/file/d/1q56xmdxOGUyMaS18sz9Rhyn9qjzCL8yJ/view?usp=drive_link",
			"https://drive.google.com/file/d/1YmAhqfzAJX6WL0CzvISVxoxbav3eU40G/view?usp=drive_link",
			"https://drive.google.com/file/d/1Ca0SyMnxQwOU7TBWonbbphGIP2oPWOkT/view?usp=drive_link",
		],
	},
	{
		id: id++,
		title: "International Congress of Medical Tourism Ukraine",
		photoLink: [
			"https://drive.google.com/file/d/1FhBp7m98rhhTMEsGBmu7891s-AqctUSx/view?usp=sharing",
			"https://drive.google.com/file/d/1kKeYRRKuNHe1XGQnN04kU_25NsKlgg05/view?usp=drive_link",
			"https://drive.google.com/file/d/1Y17Vi7btIFc9jh1nxs_OwwBW6ySdSdOB/view?usp=drive_link",
		],
	},
	{
		id: id++,
		title: "WMTC Asia-Pacific",
		photoLink: [
			"https://drive.google.com/file/d/1Y17Vi7btIFc9jh1nxs_OwwBW6ySdSdOB/view?usp=drive_link",
			"https://drive.google.com/file/d/1xok-l7DR7f87PqHzz6OSradvW-sRJi9Z/view?usp=drive_link",
			"https://drive.google.com/file/d/1Lxp-xB_VXCj_XXiG5xI2DaHjoaoiSpip/view?usp=drive_link",
		],
	},
	// jitna chahe utna add kr liyo
	// aur thoda jldi kr liyo
];

const Gallery = () => {
	return (
		<div className="gallery-container">
      
			{events.map((event) => (
				<div key={event.id} className="gevent-card">
					<h2 className="event-title">{event.title}</h2>
					<div className="event-photos">
						{event.photoLink.map((photoLink, index) => (
							// <img key={index} src={photo} alt={`Event ${event.id} - Photo ${index + 1}`} className="event-photo" />
							<iframe
								key={index}
								className="gevent-photo"
								src={appendLink(photoLink)}
								title={`Event ${event.id} - Photo ${index + 1}`}
								style={{pointerEvents: "none"}}
								allow="autoplay; encrypted-media"
								allowFullScreen
							/>
						))}
					</div>{" "}
				</div>
			))}
		</div>
	);
};

export default Gallery;
