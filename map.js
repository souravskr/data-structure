const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


Filters 
companies.forEach((company, index) => console.log(company.name, index+1))

let mature = ages.filter(age=> age%2 === 0)
// console.log(mature)

// filter retail companies

const retailCompanies = companies.filter(company => company.category === 'Retail')
// console.log(retailCompanies)

const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)

// console.log(eightiesCompanies)

const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10)

// console.log(lastedTenYears)

// ------->Map<------

const testMap = companies.map(company => `${company.name} [${company.start}-${company.end}]`)

// console.log(testMap)

const squaredRootAges = ages.map(age => Math.sqrt(age))
                            .map(age => age * 2)
// console.log(squaredRootAges)


// ------->Sort<-------
const sortedCompanies = companies.sort((a, b) => a.start > b.start ? 1 : -1)
console.log(sortedCompanies)

const reverseSortedAge = ages.sort((a, b) => a > b ? -1 : 1)
console.log(reverseSortedAge)

// ------->Reduce<-------

const totalAges = ages.reduce((total, age) => total + age, 0)
console.log(totalAges)

const yearsOfCompanies = companies.map(company => company.end - company.start)
                                    .reduce((total, age) => total + age, 0)
console.log(yearsOfCompanies)

