
const DonationItem = ({data}) => {
    const { id, picture, title, description, button_bg_color, price, card_bg_color, text_color, category, } = data || {}
    console.log(data);
    
    return (
        <div className="flex gap-4 items-center rounded-md h-[210px]"  style={{backgroundColor : card_bg_color}}>
           <img className="h-52 max-w-[200px]" src={picture} alt="" /> 
           <div className="flex items-center">
            <div className="space-y-3">
             <h2 className="font-medium px-4 py-1 w-20 flex justify-center items-center" style={{color : text_color, backgroundColor : card_bg_color}}>
             {
                category
             }
             </h2>
             <h2 className="text-xl font-semibold">
                  {
                    title
                  }
             </h2>
             <h2 className="font-semibold" style={{color : text_color}}>
             ${
                price
             }.00

             </h2>
             <button className="px-5 py-2 text-white" style={{backgroundColor : button_bg_color}}>Vew Details</button>
            </div>
           </div>
        </div>

 
    );
};

export default DonationItem;