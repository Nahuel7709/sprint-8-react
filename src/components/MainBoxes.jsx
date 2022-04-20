import MainBox from "./MainBox";


function MainBoxes (){
    const dataBoxes = [
		{
		  title: "Categories in data base",
		  amount: 3,
		  iconName: "fa-puzzle-piece",
		  styles: ["border-left-primary", "text-primary"]
		},
		{
		  title: "Total Products",
		  amount: 9,
		  iconName: "fa-wine-bottle",
		  styles: ["border-left-success", "text-success"]
		},
		{
		  title: "Users quantity",
		  amount: 5,
		  iconName: "fa-user",
		  styles: ["border-left-warning", "text-warning"]
		}
	  ];

    return (
<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					
					<div className="row">
					{
						dataBoxes.map((dataBox, i) => <MainBox key={i} dataBox = {dataBox}/>)
					}
					
					</div>
				</div>
    )
}

export default MainBoxes;