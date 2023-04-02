import "./Form.css";

function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const response = await fetch("/submit_form.php", {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      // TODO: go back to home page or show success message
    } else {
      // TODO: show errors
      const errors = JSON.parse(response.headers.get("FormErrors"));
      console.log(errors);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="entry">
            <label for="first_name">First name</label>
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              className="text-input"
              required
            />
          </div>
          <div className="entry">
            <label for="last_name">Last name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              className="text-input"
            />
          </div>
        </div>
        <div className="row">
          <div className="entry">
            <label for="phone">Phone</label>
            <input
              type="phone"
              placeholder="Phone"
              name="phone"
              className="text-input"
              pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
            />
          </div>
          <div className="entry">
            <label for="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="text-input"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="entry">
            <label for="address">Address</label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              className="text-input"
              required
            />
          </div>
          <div className="entry">
            <label for="city">City</label>
            <input
              type="text"
              placeholder="City"
              name="city"
              className="text-input"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="entry">
            <label for="state">State/Province</label>
            <input
              type="text"
              placeholder="State"
              name="state"
              className="text-input"
              required
            />
          </div>
          <div className="entry">
            <label for="zip">Zip</label>
            <input
              type="text"
              placeholder="Zip"
              name="zip"
              className="text-input"
              pattern="[0-9]+"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="entry">
            <label for="country">Country</label>
            <input
              type="text"
              placeholder="Country"
              name="country"
              className="text-input"
            />
          </div>
        </div>
        <div className="selection">
          What is the nature of the tutoring services you require?
          <div className="options">
            Private
            <input
              type="radio"
              name="tutoring_nature"
              value="Private"
              required
            />
            Professional
            <input
              type="radio"
              name="tutoring_nature"
              value="Professional"
              required
            />
          </div>
        </div>
        <div className="selection">
          In which type of our tutoring services are you interested?
          <div className="options">
            One-on-One
            <input
              type="radio"
              name="tutoring_type"
              value="One-on-One"
              required
            />
            Small Group
            <input
              type="radio"
              name="tutoring_type"
              value="Small Group"
              required
            />
            Cultural Consulting
            <input
              type="radio"
              name="tutoring_type"
              value="Culture Consulting"
              required
            />
            Professional Seminars
            <input
              type="radio"
              name="tutoring_type"
              value="Professional Seminars"
              required
            />
            Conversations
            <input
              type="radio"
              name="tutoring_type"
              value="Conversations"
              required
            />
            Book and Film Club
            <input
              type="radio"
              name="tutoring_type"
              value="Book and Film Club"
              required
            />
            Workshops
            <input
              type="radio"
              name="tutoring_type"
              value="Workshops"
              required
            />
          </div>
        </div>
        <div className="selection">
          How would you prefer to receive such services?
          <div className="options">
            Virtually
            <input
              type="radio"
              value="Virtually"
              name="service_reception"
              required
            />
            In Person
            <input
              type="radio"
              value="In Person"
              name="service_reception"
              required
            />
            Mix
            <input type="radio" value="Mix" name="service_reception" required />
            Doesn't Matter
            <input
              type="radio"
              value="Doesn't Matter"
              name="service_reception"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="entry">
            What subject or subjects are you interested in studying?
            <input type="text" name="subject" className="text-input" required />
          </div>
        </div>
        <div className="row">
          <div className="entry">
            How many hours could you devote to studying for each meeting?
            <input type="number" name="hours" className="text-input" />
          </div>
        </div>
        <div className="checkbox">
          <div className="options">
            I would like to receive information regarding all courses offered in
            my town, city, or region
            <input type="checkbox" name="info_physical" />
          </div>
        </div>
        <div className="checkbox">
          <div className="options">
            I would like to receive information regarding all courses offered
            virtually
            <input type="checkbox" name="info_virtual" />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" className="submit-button" />
        </div>
      </form>
    </div>
  );
}

export default Form;
