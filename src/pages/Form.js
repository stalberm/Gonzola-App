import "./Form.css"

function Form() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.elements.first.value)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          First Name: <input type="text" placeholder="First Name" name="first" className="text-input" />
          Last Name: <input type="text" placeholder="Last Name" name="last" className="text-input" />
        </div>
        <div>
          Address: <input type="text" placeholder="Address" name="address" className="text-input" />
          City: <input type="text" placeholder="City" name="city" className="text-input" />
          State/Province: <input type="text" placeholder="State" name="state" className="text-input" />
          Zip: <input type="text" placeholder="Zip" name="zip" className="text-input"/>
          Country: <input type="text" placeholder="Country" name="country" className="text-input" />
        </div>
        <div>
          Phone: <input type="text" placeholder="Phone" name="phone" className="text-input" />
        </div>
        <div>
          Email: <input type="text" placeholder="Email" name="email" className="text-input" />
        </div>
        <div>
          What is the nature of the tutoring services you require?
          Private <input type="checkbox" name="private" />
          Professional <input type="checkbox" name="professional" />
        </div>
        <div>
          In which type of our tutoring services are you interested?
          <div>
            One-on-One <input type="checkbox" name="type-one" />
            Small Group <input type="checkbox" name="type-group" />
            Cultural Consulting <input type="checkbox" name="type-consult" />
            Professional Seminars <input type="checkbox" name="type-seminar" />
            Conversations <input type="checkbox" name="type-conversation" />
            Book and Film Club <input type="checkbox" name="type-club" />
            Workshops <input type="checkbox" name="type-workshop" />
          </div>
        </div>
        <div>
          How would you prefer to receive such services?
          <div>
            Virtually <input type="checkbox" name="private" />
            In Person <input type="checkbox" name="professional" />
            Mix <input type="checkbox" name="professional" />
            Doesn't Matter <input type="checkbox" name="professional" />
          </div>
        </div>
        <div>
          What subject or subjects are you interested in studying?
          <input type="text" name="subject" className="text-input" />
        </div>
        <div>
          How many hours could you devote to studying for each meeting?
          <input type="text" name="hours" className="text-input" />
        </div>
        <div>
          I would like to receive information regarding all courses offered in my town, city, or region
          <input type="checkbox" name="info-physical" />
        </div>
        <div>
          I would like to receive information regarding all courses offered virtually
          <input type="checkbox" name="info-virtual" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form