let button = document.getElementById('lib-button');

const makeStory = () => {
  const story = document.createElement('p');
  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const person = document.getElementById('person').value;
  story.innerHTML = `${person} chuckles whenever they see a ${adjective} ${noun}`;
  document.body.appendChild(story);
}

button.addEventListener('click', makeStory);