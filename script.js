const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let  priceArr=document.querySelectorAll('.price');
  console.log(priceArr);
	let sum=0;
	for( let  p of priceArr)
		{
			console.log(p.innerText);
            sum+=Number(p.innerText);
		}
    //console.log("sum "+sum);
	let tr_js=document.createElement('tr');
    let  cell =tr_js.insertCell();
    cell.colSpan=2;
	cell.setAttribute("id","ans")
    cell.innerText= "total price: "+sum;
    let  table_js= document.querySelector("table");
	table_js.appendChild(tr_js);
    let tableChilds=table_js.children;
    console.log(tableChilds);
};

getSumBtn.addEventListener("click", getSum);

