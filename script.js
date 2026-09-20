const esiOption=document.getElementById("esiOption");
const noEsiOption=document.getElementById("noEsiOption");
const esiCalculator=document.getElementById("esiCalculator");
const noEsiCalculator=document.getElementById("noEsiCalculator");

esiOption.onclick=()=>{esiOption.classList.add("active");noEsiOption.classList.remove("active");esiCalculator.classList.add("show");noEsiCalculator.classList.remove("show")};
noEsiOption.onclick=()=>{noEsiOption.classList.add("active");esiOption.classList.remove("active");noEsiCalculator.classList.add("show");esiCalculator.classList.remove("show")};

function money(n){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumFractionDigits:2}).format(n)}

function calculateESI(){
const name=document.getElementById("esiName").value.trim(),salary=+document.getElementById("esiSalary").value||0,days=+document.getElementById("esiWorkingDays").value||0,lop=+document.getElementById("esiLop").value||0;
if(salary<=0)return alert("Please enter the total salary.");
if(days<=0)return alert("Please enter the number of working days.");
if(lop>days)return alert("LOP days cannot be greater than working days.");
const lopDeduction=salary/days*lop,after=salary-lopDeduction,esi=after*.0075,net=after-esi;
document.getElementById("esiAmount").value=esi.toFixed(2);document.getElementById("esiCalculatedSalary").value=net.toFixed(2);
document.getElementById("resultEsiName").textContent=name||"Employee";document.getElementById("resultEsiGross").textContent=money(salary);document.getElementById("resultEsiLop").textContent=money(lopDeduction);document.getElementById("resultEsiAmount").textContent=money(esi);document.getElementById("resultEsiNet").textContent=money(net);document.getElementById("esiResult").classList.add("show");
}

function calculateNoESI(){
const name=document.getElementById("noEsiName").value.trim(),salary=+document.getElementById("noEsiSalary").value||0,days=+document.getElementById("noEsiWorkingDays").value||0,lop=+document.getElementById("noEsiLop").value||0,pct=+document.getElementById("pfPercentage").value||0,other=+document.getElementById("otherDeduction").value||0;
if(salary<=0)return alert("Please enter the total salary.");
if(days<=0)return alert("Please enter the number of working days.");
if(lop>days)return alert("LOP days cannot be greater than working days.");
const lopDeduction=salary/days*lop,after=salary-lopDeduction,pf=after*pct/100,net=after-pf-other;
document.getElementById("pfAmount").value=pf.toFixed(2);document.getElementById("noEsiCalculatedSalary").value=net.toFixed(2);
document.getElementById("resultNoEsiName").textContent=name||"Employee";document.getElementById("resultNoEsiGross").textContent=money(salary);document.getElementById("resultNoEsiLop").textContent=money(lopDeduction);document.getElementById("resultPfAmount").textContent=money(pf);document.getElementById("resultOtherDeduction").textContent=money(other);document.getElementById("resultNoEsiNet").textContent=money(net);document.getElementById("noEsiResult").classList.add("show");
}

function resetESI(){["esiName","esiSalary","esiWorkingDays","esiLop"].forEach(id=>document.getElementById(id).value="");document.getElementById("esiAmount").value="0";document.getElementById("esiCalculatedSalary").value="0";document.getElementById("esiResult").classList.remove("show")}
function resetNoESI(){["noEsiName","noEsiSalary","noEsiWorkingDays","noEsiLop"].forEach(id=>document.getElementById(id).value="");document.getElementById("pfPercentage").value="0";document.getElementById("pfAmount").value="0";document.getElementById("otherDeduction").value="0";document.getElementById("noEsiCalculatedSalary").value="0";document.getElementById("noEsiResult").classList.remove("show")}

document.getElementById("calculateEsiBtn").onclick=calculateESI;
document.getElementById("resetEsiBtn").onclick=resetESI;
document.getElementById("calculateNoEsiBtn").onclick=calculateNoESI;
document.getElementById("resetNoEsiBtn").onclick=resetNoESI;
