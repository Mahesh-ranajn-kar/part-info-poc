


export default function SelectBox(props) {
  console.log(props)
    return (
      <select className="form-select">
        <option disabled hidden>
          --Select--
        </option>
        <option>IND</option>
        <option>USA</option>
        <option>UK</option>
      </select>
    );
  }