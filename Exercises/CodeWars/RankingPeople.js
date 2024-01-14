function ranking(people) {
    if(!people.length) return [];

    // sorts the people on descendent order based on the 'points' property 
    let sortPeople = people.sort((a,b) => b.points - a.points);
    let points = sortPeople[0].points; // the biggest number of points
    let position = 1;

    let rankPeople = sortPeople.map((item, index) => {
        // assigns a 'position' property to each object based on its points
        if(item.points === points) {
            item.position = position;
        }
        // if there are points that are not as the max points then we assing the points as they are and increment the index for the position to get the true position
        else {
            points = item.points;
            item.position = index + 1;
            position = item.position;
        }
        console.log(item)
        return item
    });
    
    let objPeople = {};
    let result = [];

    //
    rankPeople.map(item => {
        if(objPeople.hasOwnProperty(item.position)) {
            // if our object has the key 'position'
            // we push the item from before
            objPeople[item.position].push(item);
        } else {
            objPeople[item.position] = [];
            objPeople[item.position].push(item);
        }
    });

    for(let i in objPeople) {
        objPeople[i].sort((a,b) => {
            if(a.name > b.name) {
                return 1
            }
            if(a.name < b.name) {
                return -1
            }
            return 0
        }).map(item => {
            result.push(item)
        })
    }
    return result
}


const people =
    [
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
    ]

    console.log(ranking(people))