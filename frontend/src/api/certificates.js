/*

 For usage with a small number of certificates, there's no need to use a database.
 The certificates dictionary contains all the certs on the system.

 !IMPORTANT: For larger uses, implementation with a database is a must.
 Implementation with Firebase and MongoDB coming soon!

*/

// List of certificates to be managed by the system
let certificates = {
	"TOUxINDdxC": {
		type: "Volunteering Certificate",
		recipient: "Maurice Alexander Purnawan",
		date: "5 October 2020",
		description: "Maurice has been a valuable member of the Young Scientists Journal. He has been an asset to most Software Development projects and has always actively contributed. He developed entirely the new submission platform for our organization. Thank you for your contributions Maurice! It is great having you on the YSJ Team.",
		signature: "Federico Galbiati, Head of Production"
	}
}

// Functiont to get the certificate by id and return it
let getCertificate = (id) => {
	return certificates[id];
}

export default getCertificate;
