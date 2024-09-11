import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';


const ReservationForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [people, setPeople] = useState('');
    const [specialRequests, setSpecialRequests] = useState(null);
    const [error, setError] = useState(null);



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !date || !time || people <= 0) {
            alert('Please fill in all fields correctly.');
            return;
        }
    
        const reservationData = {
            name:name,
            email: email,
            reservationDate: date, 
            numberOfPeople: people, 
            time: {
                hour: time.getHours().toString(),
                minute: time.getMinutes().toString(),
            },
            specialRequests: specialRequests, 
        };
    
        try {
            const response = await fetch('api/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });
    
            if (response.ok) {
                const result = await response.json();
                alert('Reservation successfully made!');
              
                setName('');
                setEmail('');
                setDate(null);
                setTime(null);
                setPeople(1);
                setSpecialRequests('');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error making reservation:', error);
            alert('There was an error making your reservation. Please try again.');
        }
    };

    return ( 
        <div>
            <h3>HURRY UP AND RESERVE YOUR TABLE!</h3>
        <form className="create container col-6 p-3 mt-5 mb-5" onSubmit={handleSubmit}>
           

                    <div className="form-group">

                        <input
                        className="form-control m-3"
                        placeholder="Name"
                        type="text"
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                        />

                    </div>

                    <div className="form-group">

                        <input
                        className="form-control m-3"
                        placeholder="Email"
                        type="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        />
                    </div>

                    <div className="form-group">
                        <DatePicker
                            selected={date}
                            onChange={(date) => setDate(date)}
                            className="form-control m-3"
                            placeholderText="Select date"
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>

                    <div className="form-group">
                        <DatePicker
                            selected={time}
                            onChange={(time) => setTime(time)}
                            className="form-control m-3"
                            placeholderText="Select time"
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            className="form-control m-3"
                            placeholder="Number of People"
                            type="number"
                            onChange={(e) => {
                                const value = parseInt(e.target.value);
                                if (value > 0) {
                                    setPeople(value);
                                }
                            }}
                            value={people}
                            min="1"
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            className="form-control m-3"
                            placeholder="Any special requests?"
                            rows="4"
                            onChange={(e) => setSpecialRequests(e.target.value)}
                            value={specialRequests}
                        />
                    </div>

                   

                    

  
  
               <button className="btn btn-secondary m-5" type="submit">Book Now</button>
               {error && <div className="error">{error}</div>}


        </form>
        </div>
        
     );

}
 
export default ReservationForm;