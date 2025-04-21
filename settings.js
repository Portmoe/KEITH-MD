/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61VaY/iOBD9L/4KveQ+kFranBwhEI5wrVYrkzgH5CJ2AmHU+9tXgW51SzPT0ytNPlmO/epV1XvlbyDLY4ws1ID+N1CUcQ0JapekKRDoA7UKAlSCLvAhgaAPGitNJ52JGcz9Rhcu0XaQR2GS3/ydXF1iaeYwZ8xdDLdy8TN46YKiOiSx9wmgHw9Z7VTvx1QjsMtdonc2vKrayTFYMIxeHtcOPz4Qat1ruGfw0iLCuIyz0CgilKISJhZqHBiXX6NP2ZjWJFNW1PFxt/DxdZ9uMis/+s3V2oXlmdWLvEETp9m6X6OfRwNlu3KXec8tuNRjpyM36znyjrZLTaMDe7X1iO7DK9raD/o4DjPkj3yUkZg0X667O8GzIZuZSlm5Y0OR3AoH8mS/QofVIMC9QkrL46nAOWeevka8iNOqnijaejHaqPh0PXawod9qbpIWS2tFNfIpmI+bHrOLlI/EnfJNK6f/U3d73GuW2WreGeqjyWmfOfGUj1zxOOP9M7rRo86x2lpCdfWpL9JvHLQ67EhyGXGeMVL2C3mwv04WpXbh5cth0BGTkVcU172gXd7pQ1KVn7GUT/OJGRNxaLG9wOpVUqNqR307IxNsD02CZoEV6gNrg8+rq2zhfZMNcMwHirdsOtQYLq+CsD+meREw6yikxFimakYJn+8ZnVAz8kGffumCEoUxJiUkcZ7d91ixC6BfL5FXInIvL1i71OxC68l6AwvzuLXsRFf2+a2uE3luuWg8pFTR17dZUUvPoAuKMvcQxsgfxpjkZWMjjGGIMOj/de9Um3SJ0pygceyDPmB4jqY5nqMYlvsT/3GJIMGwKP7IEAFdEJR5aiPQJ2WFuuB+QZQ0neJlhaYlVaVEQ2c1WtB0kxJUWuIlvk0xfQRdxSnCBKYF6NMix9MyK8vUS/f38FANSdFoihMM01RF0aRUmWNFQ+EkhpUknfuMB0dRzO/iQZmSQImsoQmUKZiGJkm0ytKGqBmmxDAi/Usef3dBhq7k4adWBSzdBUFcYuJmVZHk0H8z29tP6Hl5lZFlk3lau0Al6H/YRoTEWYjbzKoMll4U10hr8wD9ACYYvXSBj+rYQy0ekP9Z55Il+PP9bGNnkI6d1bCZt0qK8uxxBLKyyB5E4UmkKPmJE2n2SaK84AlCWuAl2fdFDoG2HI9R1t75qbOm+8JhTttbujkaS2ke7YKdaePLBJLL3R0PS6AS+W9VPkDvVBWr/ISyT3CrtdEp1JLrhIG7t6PkxLv0Ti4m55j7gPuwGuh/e38+tNxv8RbOWuRV0QZtt9o436mhTzPfCyKD7WmwO/3r5CVJc9TGem1Ei+IjAuMEgz7QLJ2r+NHQcGbbBCuDgWKEihYq4L1xb4PpYXyVN09W6Ru9gKJp75CHmTH38jkz5KJ9iDvnjbyoZ3WUw8R7/gEI6IMLk4ytJWt5I6uzptyjlg1rJlcJE5i25wk3YTMsYtVrwpVQmMcFnKaMySW7K6vZZ5/0bNS7cgF0Ux2Ph2E8C8ztNNWV5zbaQ0Afg+FJRfNh4Yzz41Q4yQNpergcK97WbWk1aGp1LV9MNxNZuWctXTufEptSK55ZeBy7lA4HKrIpv96uOz2JJqywmnGL5qbNHyPzPrKT16cyfh1mD7kFMbq/PK+N+GXD3pVPvXQ/YLy+ZT9RlzpHi712ZhcOK0/97UAYja/G0DKmUWe02U2cc1K7h1vJwUGxBS+tpYsEkiAv09Y+mV/msQ+6IIGYKO/m/cF8lIQuSBulKJYEkjfPA+X+TQh4+Q9AmBkipgkAAA==';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
