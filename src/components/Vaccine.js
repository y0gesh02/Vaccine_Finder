import React, { useEffect, useState } from 'react';
import moment from "moment";
import "./Vaccine.css";
const Vaccine = ()=> {
    const[pincode, setPincode] = useState("");
    const[age, setAge] = useState("");
    const[date, setDate] = useState("1");
    const[loadData, setLoadData] = useState(false);
    const[numberofslots, setNumberOfSlots] = useState(0);
    const[centres, setCentres] = useState([]);
    const[notAvailable, setNotAvailable] = useState(false);

    const fetchUser = async(api)=>{
        let responce = await fetch(api)
            .then((responce)=>responce.json())
            .then(function (slots){
                let sessions = slots.sessions;

                let validSlots = sessions.filter(
                    (slots) => slots.min_age_limit <=age
                    // && slots.available_capacity >0
                );

                console.log({date: date, validSlots: validSlots.length});

                if(validSlots.length > 0){
                    setNumberOfSlots(validSlots.length);
                    for(let i=0;i<validSlots.length;i++){
                        const myobj ={
                            name : validSlots[i].name,
                            address : validSlots[i].address,
                            vaccine : validSlots[i].vaccine,
                            firstAvailable : validSlots[i].available_capacity_dose1,
                            secondAvailable : validSlots[i].available_capacity_dose2,
                            Type : validSlots[i].fee_type
                        }
                        setCentres((oldarray)=>[...oldarray, myobj]);
                    }
                }
                else{
                    setNotAvailable(true);
                }
            }).catch(function(error){
                console.log(error);
            });
        return {success : true, data: responce};
    }

    useEffect(()=>{
        (async ()=>{
            var api = 
            "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" +
            pincode + 
            "&date=" + 
            date;

            if(loadData){
                let res = await fetchUser(api);

                if(res.success){
                    setLoadData(false);
                }
            }
        })();
    }, [loadData])

    function formsubmit(e){
        e.preventDefault();
        setCentres([]);
        setNotAvailable(false);
        setLoadData(true);
    }
    return (
        <div>
            <div className="mw">
                <form onSubmit={formsubmit} autoComplete="off">
                    <div className="pin"><label htmlFor="">Pincode</label></div>
                   
                    <input 
                        type="number" name="pincode"
                        value={pincode} onChange={(e)=>setPincode(e.currentTarget.value)}
                        placeholder="Eg: 452002" required
                    />
                    
                    <div className="pin"><label htmlFor="">Age</label></div>
                     <input 
                        type="number" id=""
                        value={age} onChange={(e)=>setAge(e.currentTarget.value)}
                        placeholder="Eg: 50" required
                    />
                   <div className="pin"><label htmlFor="date">Date</label></div> 
                    <input 
                        type="date" name="" id="inp"
                        onChange={(e)=>setDate(
                            moment(e.currentTarget.value,"YYYY-MM-DD").format("DD-MM-YYYY")
                        )}
                        required
                    />
                    <button className="bt" type="submit">Submit</button>
                    
                </form>
            </div>
            {centres.length ? (
                <div className="flexy ">
                    <h2 className="av">Available Centers on {date}</h2>
                     <h4 className="heading">{numberofslots} centers available for {date}</h4>
                        
                            <div className='rr'>
                               {centres.map((item)=>{
                                return <li key={item}>Centre : {item.name}<br/>
                                Address : {item.address}<br/>
                                Vaccine : {item.vaccine}<br/>
                                1st Dose available : {item.firstAvailable}<br/>
                                2nd Dose available : {item.secondAvailable}<br/>
                                Type : {item.Type}
                                </li>;
                                })}
                            </div>
                       
                    
                </div>
            ) : (
                ""
            )}

            {notAvailable ? (
                <h2 className="ft">No Centers Available For Vaccination Right Now, Kindly Check in Sometime </h2>
            ) : (
                ""
            )}
        </div>
    )
}
export default Vaccine;