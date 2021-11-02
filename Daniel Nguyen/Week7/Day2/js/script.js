let user = {};

const getUser = function (event) {
  event.preventDefault();
  const userID = $('#get-user-input')[0].value;
  const url = `https://api.sleeper.app/v1/user/${ userID }`;

  $.ajax(url).done(function (result) {
    user = result;
    renderTable(result, 'leagues-table');
    $('#get-leagues').append($('<button>Get Leagues</button>'));
  });
}

const getLeagues = function (event) {
  event.preventDefault();
  const url = `https://api.sleeper.app/v1/user/${user.user_id}/leagues/nfl/2021`;

  $.ajax(url).done(function (result) {
    data = result.map((league) => league.name);
    renderTable(data, 'leagues-table');
  });
}

$('#get-user').on('submit', getUser);
$('#get-leagues').on('submit', getLeagues);


// Renders any object as a table
const renderTable = function (data, tableID) {
  for (let [key, value] of Object.entries(data)) {
    if (value) {
      $(`#${tableID}`).append($(`
        <tr>
          <td>${key}</td>
          <td>${key === 'avatar' ? `<img src=https://sleepercdn.com/avatars/thumbs/${value}>` : value}</td>
        </tr>
      `));
    }
  }
}
