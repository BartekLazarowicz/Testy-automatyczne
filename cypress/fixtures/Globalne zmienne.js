//strona testowana
global.Site = 'https://rc.wfirma.pl';

//dane do logowania
global.Login = 'bartek.lazarowicz+' + Math.floor(Math.random() * 10001) + '@wfirma.pl';
global.Password = '123123qwe';

//dane przy rejestracji
global.NIP = '9151677484';
global.CompanyName = 'BUSINESS TAX Sp. z o. o.';
global.Street = 'ul. Bolesława Krzywoustego';
global.BuildingNumber = '105';
global.FlatNumber = '21';
global.Zip = '51-166';
global.City = 'Wrocław';

//dane do wystawiania faktury
global.InvoiceContentCount = '5'; //ilość pozycji na fakturze
global.RandomNumbContractor = (Math.floor(Math.random() * 1000001))+''; //liczby losowe
global.RandomZip = RandomNumbContractor.substr(0,2) + '-' + RandomNumbContractor.substr(2,3);

//dane dodawanie produktu
global.GoodsCount = (Math.floor(Math.random() * 11));


