import React from "react";

export default function People(props) {
  const { people } = props;

  const peopleRows = people.map((person, idx) => (
    <tr key={idx} onClick={() => props.onFoodClick(idx)}>
      <td className="right aligned">{person.id}</td>
      <td className="right aligned">{person.firstname}</td>
      <td className="right aligned">{person.lastname}</td>
    </tr>
  ));

  return (
    <table className="ui selectable structured large table">
      <thead>
        <tr>
          <th colSpan="5">
            <h3>Employees</h3>
          </th>
        </tr>
        <tr>
          <th>Id</th>
          <th>First</th>
          <th>Last</th>
        </tr>
      </thead>
      <tbody>{peopleRows}</tbody>
      {/* <tfoot>
        <tr>
          <th>Total</th>
          <th className="right aligned" id="total-kcal">
            {sum(people, "id")}
          </th>
          <th className="right aligned" id="total-protein_g">
            {sum(people, "")}
          </th>
          <th className="right aligned" id="total-fat_g">
            {sum(people, "fat_g")}
          </th>
        </tr>
      </tfoot> */}
    </table>
  );
}

function sum(people, prop) {
  return people
    .reduce((memo, food) => parseInt(food[prop], 10) + memo, 0.0)
    .toFixed(2);
}
