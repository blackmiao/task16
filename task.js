
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById("aqi-city-input").value;
	var value = document.getElementById("aqi-value-input").value;
	aqiData[city] = value;
}

/**
 * 清空table
 */
function deleteAll(){
	var list = document.getElementById("aqi-table");
	if(list.childNodes != null){
		for(var i=0;i<list.childNodes.length;){
			list.removeChild(list.childNodes[0]);
		}
	}
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table = document.getElementById("aqi-table");
	table.setAttribute("cellspacing",0);
	table.setAttribute("cellpadding",10);
	table.setAttribute("align","center");
	table.setAttribute("border",1);
	table.setAttribute("width",300);
	for(key in aqiData){
	var tr = table.appendChild(document.createElement("tr"));
	var td1 = tr.appendChild(document.createElement("td"));
	td1.innerHTML = key;
	var td2 = tr.appendChild(document.createElement("td"));
	td2.innerHTML = aqiData[key];
	}
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
	deleteAll();
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	document.getElementById("add-btn").addEventListener("click",addBtnHandle);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
	document.getElementById("aqi-table").addEventListener("click",delBtnHandle);
}

window.onload = function(){
	init();
};
