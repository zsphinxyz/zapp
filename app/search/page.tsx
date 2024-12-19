'use client'

import { useMemo, useState } from "react";

export default function Search() {
  const Artists = useMemo(() => [
    "Adam Driver", "Adam Sandler", "Adele", "Adrianne Palicki", "Aidan Turner",
    "Al Pacino", "Alec Baldwin", "Alicia Vikander", "Allison Janney", "Amanda Seyfried",
    "Amy Adams", "Amy Poehler", "Ana de Armas", "Andrew Garfield", "Andy Serkis",
    "Angela Bassett", "Angelina Jolie", "Anna Kendrick", "Anne Hathaway", "Anya Taylor-Joy",
    "Ben Affleck", "Ben Kingsley", "Benedict Cumberbatch", "Betty White", "Bill Murray",
    "Billy Bob Thornton", "Blake Lively", "Bob Odenkirk", "Bonnie Hunt", "Brad Pitt",
    "Bradley Cooper", "Brie Larson", "Bruce Willis", "Bryan Cranston", "Cameron Diaz",
    "Carey Mulligan", "Carrie Fisher", "Cate Blanchett", "Catherine Zeta-Jones", "Chadwick Boseman",
    "Charlize Theron", "Chiwetel Ejiofor", "Chloe Grace Moretz", "Chris Evans", "Chris Hemsworth",
    "Chris Pine", "Chris Pratt", "Christian Bale", "Christina Applegate", "Christoph Waltz",
    "Christopher Walken", "Claire Danes", "Claire Foy", "Clint Eastwood", "Colin Farrell",
    "Colin Firth", "Courteney Cox", "Daniel Craig", "Daniel Day-Lewis", "Daniel Radcliffe",
    "Danny DeVito", "Denzel Washington", "Diane Keaton", "Diane Lane", "Don Cheadle",
    "Drew Barrymore", "Dustin Hoffman", "Dwayne Johnson", "Eddie Murphy", "Eddie Redmayne",
    "Edward Norton", "Elisabeth Moss", "Elizabeth Banks", "Elizabeth Debicki", "Elizabeth Olsen",
    "Ellen Page", "Emily Blunt", "Emma Roberts", "Emma Stone", "Emma Thompson",
    "Emmy Rossum", "Ethan Hawke", "Ewan McGregor", "Felicity Jones", "Finn Wolfhard",
    "Florence Pugh", "Frances McDormand", "Gal Gadot", "Gary Oldman", "Gemma Arterton",
    "George Clooney", "Gillian Anderson", "Gina Rodriguez", "Glenn Close", "Halle Berry",
    "Harrison Ford", "Heath Ledger", "Helen Hunt", "Helen Mirren", "Henry Cavill",
    "Hugh Grant", "Hugh Jackman", "Idris Elba", "Jack Black", "Jack Nicholson",
    "Jackie Chan", "Jake Gyllenhaal", "James Franco", "James McAvoy", "James Stewart",
    "Jamie Foxx", "Jane Fonda", "Jared Leto", "Jason Bateman", "Jason Momoa",
    "Jeff Bridges", "Jeff Goldblum", "Jennifer Aniston", "Jennifer Connelly", "Jennifer Lawrence",
    "Jennifer Lopez", "Jessica Chastain", "Jessica Lange", "Jessica Alba", "Jessica Biel",
    "Jim Carrey", "Joaquin Phoenix", "Jodie Foster", "Joe Pesci", "John Boyega",
    "John C. Reilly", "John Goodman", "John Krasinski", "Johnny Depp", "Jon Hamm",
    "Joseph Gordon-Levitt", "Josh Brolin", "Jude Law", "Julia Roberts", "Julianne Moore",
    "Justin Timberlake", "Kaitlyn Dever", "Kaley Cuoco", "Karen Gillan", "Kate Beckinsale",
    "Kate Hudson", "Kate Winslet", "Katherine Heigl", "Keanu Reeves", "Kerry Washington",
    "Kevin Bacon", "Kevin Costner", "Kevin Hart", "Kirsten Dunst", "Kit Harington",
    "Kristen Bell", "Kristen Stewart", "Kumail Nanjiani", "Lady Gaga", "Laura Dern",
    "Laurence Fishburne", "Leonardo DiCaprio", "Liam Neeson", "Lily Collins", "Lily James",
    "Lin-Manuel Miranda", "Logan Lerman", "Lupita Nyong'o", "Mads Mikkelsen", "Mahershala Ali",
    "Margot Robbie", "Mariah Carey", "Marion Cotillard", "Mark Ruffalo", "Mark Wahlberg",
    "Martin Freeman", "Matt Damon", "Matthew McConaughey", "Megan Fox", "Melissa McCarthy",
    "Meryl Streep", "Michael B. Jordan", "Michael Caine", "Michael Fassbender", "Michael Keaton",
    "Michelle Pfeiffer", "Michelle Williams", "Michelle Yeoh", "Mila Kunis", "Millie Bobby Brown",
    "Morgan Freeman", "Natalie Portman", "Neil Patrick Harris", "Nicole Kidman", "Octavia Spencer",
    "Olivia Colman", "Olivia Wilde", "Orlando Bloom", "Oscar Isaac", "Owen Wilson",
    "Paul Bettany", "Paul Rudd", "Penélope Cruz", "Peter Dinklage", "Rachel McAdams",
    "Rachel Weisz", "Rami Malek", "Rebel Wilson", "Reese Witherspoon", "Renée Zellweger",
    "Richard Gere", "Ricky Gervais", "Riz Ahmed", "Robert De Niro", "Robert Downey Jr.",
    "Robert Pattinson", "Robin Williams", "Rooney Mara", "Rosamund Pike", "Rose Byrne",
    "Ryan Gosling", "Ryan Reynolds", "Salma Hayek", "Sam Rockwell", "Samuel L. Jackson",
    "Sandra Bullock", "Saoirse Ronan", "Scarlett Johansson", "Sebastian Stan", "Shailene Woodley",
    "Shia LaBeouf", "Sigourney Weaver", "Sienna Miller", "Sissy Spacek", "Sofia Vergara",
    "Sophie Turner", "Stanley Tucci", "Steve Carell", "Steven Yeun", "Susan Sarandon",
    "Taron Egerton", "Tessa Thompson", "Thandie Newton", "Timothée Chalamet", "Tina Fey",
    "Tom Cruise", "Tom Hardy", "Tom Hanks", "Tom Holland", "Tommy Lee Jones",
    "Toni Collette", "Uma Thurman", "Viola Davis", "Will Ferrell", "Will Smith",
    "Winona Ryder", "Woody Harrelson", "Zach Galifianakis", "Zac Efron", "Zoe Saldana"
  ], []);
  
  const [search, setSearch] = useState('')

  return (
    <section className="p-3 ">
      <div className="mb-3">
        <h1 className="font-geistSans font-bold text-3xl pt-3 mb-3">Advanced Search Box</h1>
        <input type="search" value={search} spellCheck='false' autoComplete="off" name="search" id="search" placeholder="Search" className="p-2 rounded-md" onChange={(e) => setSearch(e.target.value)} />
      </div>
      
      <table className="">
        <tbody>
        {
          Artists
          // .filter((artist) => artist.toLowerCase().includes(search.toLowerCase()))
          .filter((artist) => 
            artist.match(new RegExp(`${search ? search : ''}`, 'gi'))
            || artist.replace(' ', '').match(new RegExp(`${search}`, 'gi')) // ignore white spaces
            || artist.match(new RegExp(`^${search[0]}(\\w+\\s)${search[1]}\\w+`, 'gi')) // match initials
          )
          .map((artist,i) => (
            <tr className="*:border *:px-1 *:scroll-py-0.5" key={i}>
              <td className="text-right text-black/70">{i + 1}.</td>
              <td className="">{artist}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </section>
  )
}



