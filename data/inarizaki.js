window.HQ = window.HQ || [];
(function(){
var body = [
'....kssssssk....',
'.....kssssk.....',
'...kkwwsswwkk...',
'..kuuuwwwwuuuk..',
'.kuuuuurruuuuuk.',
'.kuuuuurruuuuuk.'];
function face(h1,h2,h3,h4,eye){
  return [h1,h2,h3,h4,
  '..khsssssssshk..',
  '..kssssssssssk..',
  '..kss'+eye+'ssss'+eye+'ssk..',
  '..kssssssssssk..',
  '..ksssskksssk...'.slice(0,16),
  '...kssssssssk...'].concat(body);
}
function pal(hair){return {'.':'transparent','k':'#1a1a1a','h':hair,'s':'#f2c9a0','e':'#3a2a1a','w':'#ffffff','u':'#2a2a2e','r':'#b0202a'};}
window.HQ.push({ id:'inarizaki', team:'이나리자키 고교', colors:{main:'#2a2a2e',sub:'#b0202a'},
motto:'思い出なんかいらん - 추억은 필요 없다, 효고 최강의 도전자',
chars:[
{id:'miya_atsumu',name:'미야 아츠무',jp:'宮侑',position:'세터',number:'7',grade:'2학년',height:'183.6cm',birthday:'10월 5일',voice:'入野自由',
stats:{power:4,jump:4,stamina:4,strategy:4,technique:5,speed:4},nickname:'고교 No.1 세터',
intro:'쌍둥이 형으로 고교 최고 세터라 불린다. 오만하고 직설적이지만 배구에는 누구보다 진지하며, 스파이커가 치기 쉬운 토스를 올리는 데 자부심을 가진다.',
skills:['정밀 토스','점프 플로터/스파이크 서브 양손 구사','쌍둥이 속공'],quote:'토스 잘못 친 거면 내 탓 아니다, 니가 못 친 기다.',
sprite:{"palette":{".":"transparent","k":"#141418","u":"#1e1e22","U":"#34343a","g":"#9a9aa2","w":"#f4f4f4","e":"#2a1c12","h":"#e8c64a","H":"#b8902a","L":"#fff0a0","s":"#f3cba4","S":"#d9a47c","m":"#9a3a30","b":"#a07a20"},"rows":["........................","........kkkkkkk.........","......kkLLLLhhhkk.......",".....kLLLhhhhhhhhk......","....khhhhhhhhhhhhhhk....","....khhhhhhhhhhhHHhhk...","...khhhHHhhhhhhHsHhhk...","...khhHssHhhhHsssshhk...","...khHssssHHssssssShk...","...kHsbbssssssbbsssHk...","...kssssssssssssssssk...","...ksswekssssswekssk....","...ksseeksssseeksssk....","...kSsssssssssssssSk....","....ksssssSSssssssk.....","....ksssmwwwwmssk.......",".....ksssmmmmsssk.......","......kSssssssSk........",".......kkSSSSkk.........",".....kkuuwwSSwwuukk.....","...kkuuuugwsswguuuukk...","..kuuuuuugwwwwguuuuuk...","..kuuuuuuwwwwuuuuuuuk...","..kUuuuuuuuuuuuuuuuUk..."]}},
{id:'miya_osamu',name:'미야 오사무',jp:'宮治',position:'윙 스파이커',number:'11',grade:'2학년',height:'183.8cm',birthday:'10월 5일',voice:'?',
stats:{power:4,jump:4,stamina:4,strategy:4,technique:4,speed:4},nickname:'사무',
intro:'아츠무의 쌍둥이 동생. 형보다 침착하고 무뚝뚝하지만 승부욕은 못지않다. 먹는 것을 매우 좋아하며 다재다능한 플레이로 팀을 받친다.',
skills:['쌍둥이 속공','세트도 가능한 올라운드 플레이'],quote:'맛있는 거 먹으면 다 이긴 기분이다.',
sprite:{"palette":{".":"transparent","k":"#141418","u":"#1e1e22","U":"#34343a","g":"#9a9aa2","w":"#f4f4f4","e":"#2a1c12","h":"#8c8c96","H":"#5e5e68","L":"#c4c4cc","s":"#f0c8a2","S":"#d2a07a","m":"#7a3a32","b":"#4a4a52"},"rows":["........................",".........kkkkkkk........",".......kkhhhhLLLkk......","......khhhhhhhhLLLk.....","....khhhhhhhhhhhhhhk....","...khhHHhhhhhhhhhhhk....","...khhhsHhhhhhhhHHhhk...","...khhssssHhhhHHsssHk...","...kHsssssssHHssssssk...","...kssbbbsssssbbbsssk...","...kssssssssssssssssk...","...kssskkkssssskkksssk..","...ksssweessssweesssk...","...ksssssssssssssssSk...","....kSssssSsssssssSk....","....kssssssssssssssk....",".....kssssmmmmsssSk.....","......kSssssssssSk......","........kkSSSSkk........",".....kkuuUUSSUUuukk.....","...kkuuuuUwssssUuuukk...","..kuuuuuuuUwwwwUuuuuuk..","..kuuwwuuuuUUUUuuuuuuk..","..kUuwwuuuuuuuuuuuuuUk.."]}},
{id:'kita_shinsuke',name:'키타 신스케',jp:'北信介',position:'윙 스파이커',number:'1',grade:'3학년 (주장)',height:'175.2cm',birthday:'?',voice:'?',
stats:{power:3,jump:3,stamina:4,strategy:4,technique:4,speed:3},nickname:'?',
intro:'이나리자키의 주장. 화려함은 없지만 매일 해야 할 일을 빈틈없이 반복하는 성실함으로 팀원들의 존경을 받는다. 결과보다 과정을 중시한다.',
skills:['안정된 리시브','실수 없는 기본기'],quote:'결과는 덤이다. 매일 하는 게 중요하다.',
sprite:{"palette":{".":"transparent","k":"#141418","u":"#1e1e22","U":"#34343a","g":"#9a9aa2","w":"#f4f4f4","e":"#2a1c12","h":"#e6e6e2","H":"#b4b4b0","L":"#ffffff","d":"#3a3a3e","s":"#f2d0b0","S":"#d6ac88","m":"#8a4a40","b":"#9a9a96"},"rows":["........................","........................","........kkkkkkkk........","......kkLLhhhhhhkk......",".....kLLhhhhhhhhhhk.....","....khhhhhhhhhhhhhhk....","....khhhhhhhhhhhhhhk....","....kHhHhHhHhHhHhHhk....","....kdddddddddddddddk...","....kdsdsdsdsdsdsdsdk...","....kssbbbssssbbbsssk...","....kssssssssssssssk....","....kssweeksssweeksk....","....ksseeessssseeesk....","....kssssssssssssssk....","....kSsssssSSssssssk....","....kSssssssssssssSk....",".....kssssmmmmssssk.....","......kSssssssssSk......",".......kkSSSSSSkk.......","....kkuuuugwwguuuukk....","..kkuuuuuugwwguuuuuukk..","..kuuuuuuuggggguuuuuuk..","..kuuuuuuuuuuuuuuuuuuk.."]}},
{id:'suna_rintaro',name:'스나 린타로',jp:'角名倫太郎',position:'미들 블로커',number:'10',grade:'2학년',height:'185.7cm',birthday:'?',voice:'?',
stats:{power:3,jump:4,stamina:3,strategy:4,technique:4,speed:4},nickname:'?',
intro:'나른하고 무심한 태도의 미들 블로커. 유연한 몸을 활용해 몸통을 비틀어 치는 스파이크로 블로커를 따돌리며, 남의 일을 몰래 촬영하는 게 취미다.',
skills:['몸통 비틀기 스파이크','리드 블로킹'],quote:'뭐, 적당히 열심히 해볼까.',
sprite:{"palette":{".":"transparent","k":"#141418","u":"#1e1e22","U":"#34343a","g":"#9a9aa2","w":"#f4f4f4","e":"#2a1c12","h":"#3a2a22","H":"#22180f","L":"#6a5040","s":"#eec8a0","S":"#cfa07a","m":"#7a3a30","b":"#22180f"},"rows":["........................",".........kkkkkk.........",".......kkhhLLhhkk.......","......khhhLLhhhhhk......",".....khhhhhhhhhhhhk.....","....khhhhhhhhhhhhhhk....","....khhhHhhhhHhhhhhk....","...khhhHshhhhHshhhhhk...","...khhHssshhHssshhhhk...","...khHsbbbssssbbbsHhk...","...khHssssssssssssHhk...","...khHskkkessskkkesHhk..","...khssssssssssssssHk...","...khSssssssssssssShk...","...khhssssSssssssshhk...","....khkssssssssssskhk...","....khksssmmmmmsssk.k...",".....kkkSsssssssSk......","........kkSSSSkk........",".......kuuSSSSuuk.......","....kkuuUUwSSwUUuukk....","..kkuuuuuUwwwwUuuuuukk..","..kuuuuuuuuUUuuuuuwwuk..","..kUuuuuuuuuuuuuuuwwUk.."]}},
{id:'ojiro_aran',name:'오지로 아란',jp:'尾白アラン',position:'윙 스파이커',number:'4',grade:'3학년',height:'184.7cm',birthday:'?',voice:'?',
stats:{power:5,jump:4,stamina:4,strategy:3,technique:4,speed:4},nickname:'전국 5대 스파이커',
intro:'이나리자키의 에이스로 전국 상위 5인 스파이커 중 한 명. 쌍둥이의 폭주를 말리는 상식인 역할이자 팀의 든든한 득점원이다.',
skills:['파워 스파이크','안정된 서브'],quote:'에이스가 점수 내는 건 당연한 기다.',
sprite:{"palette":{".":"transparent","k":"#141418","u":"#1e1e22","U":"#34343a","g":"#9a9aa2","w":"#f4f4f4","e":"#140c08","h":"#1a1a1a","H":"#0a0a0a","L":"#4a4a52","s":"#b07a4e","S":"#8a5a36","m":"#5a2418","b":"#1a1010"},"rows":["........................","........................","........................",".........kkkkkkk........",".......kkLhLhLhhkk......","......khhLhLhhhhhhk.....",".....khhhhhhhhhhhhhk....",".....khhhhhhhhhhhhhk....","....khHsHsHsHsHsHsHhk...","....kHssssssssssssssk...","....ksbbbbssssbbbbssk...","....kssssssssssssssk....","....kswweessswweessk....","....ksseessssseesssk....","....kssssssSssssssSk....","....kSsssssSSssssssk....","....kSssssssssssssSk....","....kSsmssssssssmsSk....",".....kSsmmmmmmmmsSk.....","......kSSsssssSSk.......",".......kkSSSSSkk........","....kkuuuUwwwwUuuukk....","..kkuuuuuuUwwUuuuuuukk..","..kuuggguuuuuuuugggguk.."]}}
]});
})();
