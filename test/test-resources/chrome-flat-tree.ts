import { FlatTree } from "../../src/shared/types";

const chromeFlatTree: FlatTree = {
	"0": {
		id: "0",
		parentId: undefined,
		childrenIds: ["1", "2"],
		index: undefined,
		type: "folder",
		title: "",
		url: undefined,
	},
	"1": {
		id: "1",
		parentId: "0",
		childrenIds: ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
		index: 0,
		type: "folder",
		title: "Bookmarks Bar",
		url: undefined,
	},
	"2": {
		id: "2",
		parentId: "0",
		childrenIds: [],
		index: 1,
		type: "folder",
		title: "Other Bookmarks",
		url: undefined,
	},
	"5": {
		id: "5",
		parentId: "1",
		childrenIds: [],
		index: 0,
		type: "bookmark",
		title: "Facebook",
		url: "https://facebook.com/",
	},
	"6": {
		id: "6",
		parentId: "1",
		childrenIds: [],
		index: 1,
		type: "bookmark",
		title: "GitHub",
		url: "https://github.com/",
	},
	"7": {
		id: "7",
		parentId: "1",
		childrenIds: [],
		index: 2,
		type: "bookmark",
		title: "Google",
		url: "https://google.com/",
	},
	"8": {
		id: "8",
		parentId: "1",
		childrenIds: [],
		index: 3,
		type: "bookmark",
		title: "LinkedIn",
		url: "https://linkedin.com/",
	},
	"9": {
		id: "9",
		parentId: "1",
		childrenIds: [],
		index: 4,
		type: "bookmark",
		title: "Netflix",
		url: "https://netflix.com/",
	},
	"10": {
		id: "10",
		parentId: "1",
		childrenIds: [],
		index: 5,
		type: "bookmark",
		title: "Twitter",
		url: "https://twitter.com/",
	},
	"11": {
		id: "11",
		parentId: "1",
		childrenIds: [],
		index: 6,
		type: "bookmark",
		title: "Wikipedia bookmark with a very, very, very, very, very long title",
		url: "https://wikipedia.org/",
	},
	"12": {
		id: "12",
		parentId: "1",
		childrenIds: [],
		index: 7,
		type: "bookmark",
		title: "Hacker News",
		url: "https://news.ycombinator.com/",
	},
	"13": {
		id: "13",
		parentId: "1",
		childrenIds: [],
		index: 8,
		type: "bookmark",
		title: "Reddit: Programming",
		url: "https://www.reddit.com/r/programming",
	},
	"14": {
		id: "14",
		parentId: "1",
		childrenIds: [],
		index: 9,
		type: "bookmark",
		title: "Doesn't exist",
		url: "https://476055346.com/",
	},
	"15": {
		id: "15",
		parentId: "1",
		childrenIds: ["16", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
		index: 10,
		type: "folder",
		title: "Some folder",
		url: undefined,
	},
	"16": {
		id: "16",
		parentId: "15",
		childrenIds: [],
		index: 0,
		type: "bookmark",
		title: "Facebook",
		url: "https://facebook.com/",
	},
	"17": {
		id: "17",
		parentId: "15",
		childrenIds: [],
		index: 1,
		type: "bookmark",
		title: "GitHub",
		url: "https://github.com/",
	},
	"18": {
		id: "18",
		parentId: "15",
		childrenIds: [],
		index: 2,
		type: "bookmark",
		title: "Google",
		url: "https://google.com/",
	},
	"19": {
		id: "19",
		parentId: "15",
		childrenIds: [],
		index: 3,
		type: "bookmark",
		title: "LinkedIn",
		url: "https://linkedin.com/",
	},
	"20": {
		id: "20",
		parentId: "15",
		childrenIds: [],
		index: 4,
		type: "bookmark",
		title: "Netflix",
		url: "https://netflix.com/",
	},
	"21": {
		id: "21",
		parentId: "15",
		childrenIds: [],
		index: 5,
		type: "bookmark",
		title: "Twitter",
		url: "https://twitter.com/",
	},
	"22": {
		id: "22",
		parentId: "15",
		childrenIds: [],
		index: 6,
		type: "bookmark",
		title: "Wikipedia bookmark with a very, very, very, very, very long title",
		url: "https://wikipedia.org/",
	},
	"23": {
		id: "23",
		parentId: "15",
		childrenIds: [],
		index: 7,
		type: "bookmark",
		title: "Hacker News",
		url: "https://news.ycombinator.com/",
	},
	"24": {
		id: "24",
		parentId: "15",
		childrenIds: [],
		index: 8,
		type: "bookmark",
		title: "Reddit: Programming",
		url: "https://www.reddit.com/r/programming",
	},
	"25": {
		id: "25",
		parentId: "15",
		childrenIds: [],
		index: 9,
		type: "bookmark",
		title: "Doesn't exist",
		url: "https://476055346.com/",
	},
};

export default chromeFlatTree;
