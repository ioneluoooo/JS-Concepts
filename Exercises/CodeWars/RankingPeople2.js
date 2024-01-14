function ranking(people) {
    if(!people.length) return [];

    // Sort people by points in descending order
    let sortedPeople = people.sort((a,b) => b - a);

    // Initializing variables for ranking
    let position = 1;
    let maxPoints = sortedPeople[0].points;

    //Map through sorted array to assing positions
    sortedPeople.forEach((person,index) => {
        if(person.points < maxPoints) {
            position = index + 1;
        } 
        person.position = position;
        //MaxPoints for a person that is not the first
        maxPoints = person.points;
    });

    //Group people by position
    let groupedPeople = {};
    sortedPeople.forEach(person => {
        const position = person.position;
        if(!groupedPeople[position]) {
            groupedPeople[position] = [];
        }
        groupedPeople[position].push(person);
    });

    //Flatten and sort grouped objects by name
    let result = [];
    Object.keys(groupedPeople).forEach(position => {
        //* localCompare compares by the alphabet
        groupedPeople[position].sort((a,b) => a.name.localeCompare(b.name));
        result.push(...groupedPeople[position])
    })
    return result;
}

const people = [
    {
        name: "John",
        points: 100,
    },
    {
        name: "Bob",
        points: 130,
    },
    {
        name: "Mary",
        points: 120,
    },
    {
        name: "Kate",
        points: 120,
    },
];

console.log(ranking(people));