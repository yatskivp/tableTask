(function () {
    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            Img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://www.facebook.com/photo.php?fbid=578754465640942&set=a.317602991756092.1073741826.100005191805447&type=3&theater',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];
    
    var divRow = document.createElement('div'),
        container = document.getElementById('container');
    divRow.className = 'row';
    container.appendChild(divRow);//Додаємо div з класом row до контейнера (щоб юзати css бутстрапа)

//////////////////////GENERATE TABLE////////////////////////
    var table = document.createElement('table'),
        tbody = document.createElement('tbody'),
        thead = document.createElement('thead'),
        rows = tbody.rows;
    table.className = 'table table-hover';
    thead.innerHTML = '<tr><th class = "glyphicon-sort">Student</th><th class = "glyphicon-sort">email</th><th>Profile picture</th><th>Skils</th><th>controls</th></tr>';
    table.appendChild(thead);
    table.appendChild(tbody);

    var addTd = function(el,data){//функція, що додаватиме заповнені TD в TR
        var td = document.createElement('td');
        td.innerHTML = data;
        el.appendChild(td);
    }

    var fullFillTable = function(el,obj){//функція, що заповнюватиме TD під кожним хедером
        addTd(el,obj.name+' '+obj.lastName);
        addTd(el,obj.email);
        addTd(el,'<img src='+obj.img+' alt="No image">');
        addTd(el,obj.skills);
        addTd(el,'<button class="glyphicon glyphicon-edit">edit</batton><button class="glyphicon glyphicon-trash">remove</batton>');
    }

    if(students.length){//перевіряємо, чи масив наповнений
        students.forEach(function(item){
            var tr = document.createElement('tr');
            fullFillTable(tr,item);
            tbody.appendChild(tr);
        })
    }
    
    divRow.appendChild(table);
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////GANERATE FORM////////////////////////////////////////////////
var form = document.createElement('form');
var names = {'name':'text',
            'last name':'text',
            'email':'email',
            'profile picture':'text',
            'skills':'text',
            'save':'submit',
            'cancel':'button'};
var inputCreate = function(type,data,el){//функція, що формуватиме структуру форми
    var input = document.createElement('input'),
        label = document.createElement('label'),
        p = document.createElement('p');
    input.type = type;
    input.className = 'col-xs-4';
    label.setAttribute('for',data)
    label.innerHTML = data[0].toUpperCase()+data.slice(1);
    label.className = 'col-xs-2';
    if(type == 'button' || type == 'submit'){
        input.value = data;
        input.className = 'col-xs-1 col-xs-offset-2';
        el.appendChild(input);
    }else{
        if(data != 'skills'){
            input.required = true;
        }
        p.appendChild(label);
        p.appendChild(input);
        el.appendChild(p);
    }    
}
for(var key in names){
    inputCreate(names[key],key,form);
}
divRow.insertBefore(form,table);
/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////ONCLICK EVENT/////////////////////////////////////////////
tbody.onclick = function(e){
    var target = e.target;
    
    ///////////////////////EDIT BUTTON//////////////////////////////////////////////////        
    while(target.tagName !='tbody'){
        if(target.tagName == 'TR' && e.target.classList.contains('glyphicon-edit')){//шукаємо TR, в якому натиснуто edit (клікнутий тег містить клас glyphicon-edit)
            form.classList.add('edit');//додаємо формі класс edit, щоб бачити чи це редагування юзера, чи стоврення нового
            var inputs = form.querySelectorAll('input');//в input'и форми вставляємо значення TD таблиці
            inputs[0].value = target.cells[0].innerHTML.split(' ')[0];
            inputs[1].value = target.cells[0].innerHTML.split(' ')[1];
            inputs[2].setAttribute('value',target.cells[1].innerHTML);// тут атрибут, щоб потім використати влативіть, що при зміні проперті input.value, атрибут не мінятиметься 
            inputs[3].value = target.cells[2].firstChild.src;
            inputs[4].value = target.cells[3].innerHTML;                  
            return
        }
        /////////////////////REMOVE BUTTON//////////////////////////////////////////////////
        if(target.tagName == 'TR' && e.target.classList.contains('glyphicon-trash')){//шукаємо TR, в якому натиснуто remove (клікнутий тег містить клас glyphicon-trash)
            var delTarg = tbody.removeChild(target);// видаляємо відповідний TR з таблиці
            ///////костиль///////////////////
            var k = Object.keys(rows);// при таких діях, як вибір юзера і нажимання на edit, потім на remove, потім на save, мало б перезаписати юзера            
            for(var i=0; i<k.indexOf('0'); i++){//але при виконанні рядка 255, дом-елемент видаляється, проте не видаляється об"єкт із масиву rows,відповідно далі погано відпрацьовує        
                delete rows[k[i]];//тому я вручну видаляю ці об"єкти (може це через те, що я rows оголосив як глобальну змінну, і на наї є лінки, тому грабер і не підчищає)
            }
           ///////////////////////////////////            
            form.classList.remove('edit');//видаляємо клас edit, для випадку, коли спочатку натиснули на кнопку edit, а потім на remove, відповідно юзер у формі стає новим
            for(var i=0; i<students.length; i++){
                if(students[i].email == delTarg.cells[1].innerHTML){//припускається, що емейл в кожного індивідуальний
                    students.splice(i,1);//знайдений об'кт юзера видаляємо 
                    break;
                }
            }      
            return
        }///////////////////////ALERT STUDENT///////////////////////////////////////////////
        else if(target.tagName == 'TR'){//в іншому випадку виводимо алертом student
            alert(target.cells[0].innerHTML+'\n'+target.cells[1].innerHTML 
                  +'\n'+target.cells[3].innerHTML);
            return;
        }
        target = target.parentElement;
    }
}
/////////////////////////////////////////////////////////////////////////////////////    
////////////////////////////////CANCEL BUTTON////////////////////////////////////////
var cancelBtn = document.querySelector('input[value="cancel"]');
cancelBtn.onclick = function(){
    form.classList.remove('edit');
    document.querySelector('input[type="email"]').setAttribute('value','');
    form.reset();
}
/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////SAVE BUTTON////////////////////////////////////////
form.onsubmit = function(){
        var inputs = form.querySelectorAll('input');        
        if(!inputs[4].value.match(/^$|^[\w]+(?:,[\w]+)*$/i)){//перевіряє чи між скілами є кома+не пропускає skill1,,skill2
            alert('Please, separate your skills by coma! Use words without space');
            return false;
        }
        var user = {
            name: inputs[0].value,
            lastName: inputs[1].value,
            img: inputs[3].value,
            coverImg: inputs[3].value,
            email: inputs[2].value,
            skills: inputs[4].value.split(',')
        }
        
        if(form.classList.contains('edit')){//якщо форма має клас edit, то шукаємо редагованого юзера в масиві students, використовуючи email, як значення атрибуту відповідного input'у
            for(var i=0; i<students.length; i++){
                if(students[i].email == inputs[2].getAttribute('value')){//припускається, що емейл в кожного індивідуальний
                    students.splice(i,1,user);//знайдений об'кт юзера видаляємо і вставляємо новий 
                    break;
                }
            }
        }else{
            students.push(user);//в іншому випадку, це новий юзер, тому його об'єкт вставляємо в кінець масиву students(або при сортуванні на відповідну позицію)
            cancelBtn.onclick();//чистимо форму
        }

        if(sortStatusSt){//якщо список був попередньо відсортований по Student, то новий(редагований) юзер теж буде сортуватися
            sortBySt = sortBySt == 'asc'?'desc':'asc';
            students.sort(sortStudentsBySt());
            sortBySt = sortBySt == 'asc'?'desc':'asc';
        }
        if(sortStatusEm){//якщо список був попередньо відсортований по email, то новий(редагований) юзер теж буде сортуватися
            sortByEm = sortByEm == 'asc'?'desc':'asc';
            students.sort(sortStudentsByEm());
            sortByEm = sortByEm == 'asc'?'desc':'asc';
        }
        
        students.forEach(function(item,i){//обновляємо значення таблиці
            if(!rows[i]){//при додаванні нового юзера існуючих рядків в таблиці бракуватиме, тому додаємо новий, шляхом клонування 
                rows[i] = rows[i-1].cloneNode(true);
                tbody.appendChild(rows[i]);
            }
            rows[i].cells[0].innerHTML = item.name+' '+item.lastName;
            rows[i].cells[1].innerHTML = item.email;
            rows[i].cells[2].innerHTML = '<img src='+item.img+' alt="No image">';
            rows[i].cells[3].innerHTML = item.skills;
        })
    return false                  
}
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////SORTING///////////////////////////////////////////////////
var sortBySt = 'asc',
    sortStatusSt = false;//індикатор,чи є сортування, чи ні
var sortStudentsBySt = function(){
   return  function(obj1,obj2){// функція компаратор для сортування
        if(sortBySt == 'desc'){//вибирається, яким чином сортувати
            var objTmp = obj1;
            obj1 = obj2;
            obj2 = objTmp;
            objTmp = null;
        }
        if(obj1.name.toLowerCase() > obj2.name.toLowerCase()){
			return 1
		}
		if(obj1.name.toLowerCase() < obj2.name.toLowerCase()){
			return -1
		}
		if(obj1.name.toLowerCase() == obj2.name.toLowerCase()){
			return (function(obj1,obj2){//якщо імена юзерів однакові, то йде сортування по lname
				return obj1.lastName.toLowerCase() > obj2.lastName.toLowerCase()?1:-1;
			})(obj1,obj2)
		}
    }
}

var sortStudentsByEm = function(){
    return function(obj1,obj2){// функція компаратор для сортування
        if(sortByEm == 'desc'){//вибирається, яким чином сортувати
            var objTmp = obj1;
            obj1 = obj2;
            obj2 = objTmp;
            objTmp = null;
        }
        return obj1.email.toLowerCase() > obj2.email.toLowerCase()?1:-1;
    }
}

table.rows[0].firstChild.onclick = function(){// клік по хедері Student
    sortStatusSt = true;
    sortStatusEm = false;
    table.rows[0].cells[1].classList.remove('glyphicon-sort-by-alphabet-alt');//видаляємо сортувальні іконки для хедера email
    table.rows[0].cells[1].classList.remove('glyphicon-sort-by-alphabet');
    table.rows[0].cells[1].classList.add('glyphicon-sort'); 
    
    students.sort(sortStudentsBySt());
    
    if(sortBySt=='asc'){
        this.classList.remove('glyphicon-sort');
        this.classList.remove('glyphicon-sort-by-alphabet-alt');
        this.classList.add('glyphicon-sort-by-alphabet');
    }else{
         this.classList.remove('glyphicon-sort-by-alphabet');
         this.classList.add('glyphicon-sort-by-alphabet-alt');
    }
    students.forEach(function(item,i){//обновляємо значення таблиці
            rows[i].cells[0].innerHTML = item.name+' '+item.lastName;
            rows[i].cells[1].innerHTML = item.email;
            rows[i].cells[2].innerHTML = '<img src='+item.img+' alt="No image">';
            rows[i].cells[3].innerHTML = item.skills;
    });
    sortBySt = sortBySt=='asc'?'desc':'asc';//міняється значення sotrBySt для наступного кліку    
}

var sortByEm = 'asc',
    sortStatusEm = false;//індикатор,чи є сортування, чи ні
table.rows[0].cells[1].onclick = function(){// клік по хедері email
    sortStatusEm = true;
    sortStatusSt = false;
    table.rows[0].firstChild.classList.remove('glyphicon-sort-by-alphabet-alt');//видаляємо сортувальні іконки для хедера Students
    table.rows[0].firstChild.classList.remove('glyphicon-sort-by-alphabet');
    table.rows[0].firstChild.classList.add('glyphicon-sort');
    
    students.sort(sortStudentsByEm());

    if(sortByEm=='asc'){
        this.classList.remove('glyphicon-sort');
        this.classList.remove('glyphicon-sort-by-alphabet-alt');
        this.classList.add('glyphicon-sort-by-alphabet');
    }else{
         this.classList.remove('glyphicon-sort-by-alphabet');
         this.classList.add('glyphicon-sort-by-alphabet-alt');
    }
    students.forEach(function(item,i){//обновляємо значення таблиці
            rows[i].cells[0].innerHTML = item.name+' '+item.lastName;
            rows[i].cells[1].innerHTML = item.email;
            rows[i].cells[2].innerHTML = '<img src='+item.img+' alt="No image">';
            rows[i].cells[3].innerHTML = item.skills;
    });
    sortByEm = sortByEm=='asc'?'desc':'asc';//міняється значення sotrByEm для наступного кліку   
}
})();