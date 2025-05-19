// Assign team numbers for grouping
const TEAM_ADMIN_LEADERSHIP = 1;
const TEAM_VICE_CHAIRS = 2;
const TEAM_DIVISION_CHIEFS = 3;

//Faculty Database
// This file contains the faculty information for the UCSD Radiology website.
// It is used to populate the faculty section of the website.
// The data is stored in a JSON format and includes information such as name, focus, role, modality, degree, email, title, image URL, profile URL, and team.
window.facultyJson = [
    {
      "name": "Ahrens, Eric",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "eahrens@health.ucsd.edu",
      "title": "Professor",
      "team": null,
      "profileUrl": "http://profiles.ucsd.edu/eric.ahrens",
    },
    {
      "name": "Andre, Michael",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "mandre@health.ucsd.edu",
      "title": "Adjunct Professor",
      "team": null,
      "profileUrl": "http://profiles.ucsd.edu/michael.andre",
    },
    {
      "name": "Bae, Won",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "wbae@health.ucsd.edu",
      "title": "Associate Adjunct Professor",
      "team": null,
      "profileUrl": "http://profiles.ucsd.edu/won.bae",
    },
    {
      "name": "Berman, Zachary",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Interventional Radiology",
      "degree": "MD PhD",
      "email": "zberman@health.ucsd.edu",
      "title": "(HS) Associate Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855642/Zach_Berman_u4dw2r.jpg",
      "profileUrl": "https://providers.ucsd.edu/details/1033521190/radiology",
      "team": null,
    },
    {
      "name": "Bolar, Divya",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Musculoskeletal Imaging",
      "degree": "MD MPH",
      "email": "dbolar@health.ucsd.edu",
      "title": "Assistant Professor / In Residence",
      "profileUrl": "https://profiles.ucsd.edu/divya.bolar",
      "team": null,
    },
    {
      "name": "Bykowski, Julie",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Division Chief",
      "modality": "Neuroimaging",
      "degree": "MD",
      "email": "jbykowski@health.ucsd.edu",
      "title": "(HS) Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1747345550/Julie_Bykowski_Headshot_Neuro_zbd6kk.jpg",
      "profileUrl": "http://profiles.ucsd.edu/julie.marekbykowski",
      "team": 3,
    },
    {
      "name": "Brouha, Sharon",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Cardiothoracic Imaging",
      "degree": "MD MPH",
      "email": "sbrouha@health.ucsd.edu",
      "title": "(HS) Clinical Professor",
      "profileUrl": "http://profiles.ucsd.edu/sharon.brouha",
      "team": null,
    },
    {
      "name": "Chang, Eric",
      "focus1": "Research",
      "focus2": null,
      "role": "Associate Director, T32 Residency ",
      "modality": "Musculoskeletal Imaging",
      "degree": "MD",
      "email": "e8chang@health.ucsd.edu",
      "title": "Adjunct Professor",
      "profileUrl": "http://profiles.ucsd.edu/eric.chang",
      "team": null,
    },
    {
      "name": "Chang, Jennifer",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Director, MRI Fellowship Program",
      "modality": "Neuroimaging",
      "degree": "MD",
      "email": "jenchang@health.ucsd.edu",
      "title": "(HS) Associate Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855645/Jen_Chang_z2kczb.jpg",
      "profileUrl": "http://profiles.ucsd.edu/jennifer.chang",
      "team": 4,
    },
    {
      "name": "Chapelin, Fanny",
      "focus1": "Research",
      "focus2": null,
      "role": "Associate Director, T32 Residency ",
      "modality": null,
      "degree": "PhD",
      "email": "fachapelin@health.ucsd.edu",
      "title": "Assistant Professor",
      "profileUrl": "https://profiles.ucsd.edu/fanny.chapelin",
      "team": null,
    },
    {
      "name": "Chen, James",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Director, Neuro Fellowship Program",
      "modality": "Neuroimaging",
      "degree": "MD",
      "email": "Jyc042@health.ucsd.edu",
      "title": null,
      "profileUrl": "https://profiles.ucsd.edu/james.chen",
      "team": 4,
    },
    {
      "name": "Chen, Chi-Hua",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "chc101@health.ucsd.edu",
      "title": "Adjunct Professor",
      "profileUrl": "http://profiles.ucsd.edu/chi-hua.chen",
      "team": null,
    },
    {
      "name": "Cheng, Karen",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Musculoskeletal Imaging",
      "degree": "MD",
      "email": "kcheng@health.ucsd.edu",
      "title": "Assistant Professor of Clinical",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855644/Karen_Cheng_cicudp.jpg",
      "profileUrl": "http://profiles.ucsd.edu/karen.chen",
      "team": null,
    },
    {
      "name": "Chung, Christine",
      "focus1": "Clinical",
      "focus2": "Research",
      "role": "Department Chair",
      "modality": "Musculoskeletal Imaging",
      "degree": "MD MBA",
      "email": "cbchung@health.ucsd.edu",
      "title": "Professor / In Residence",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855646/Chung_Christine_tlj4s5.jpg",
      "profileUrl": "http://profiles.ucsd.edu/christine.chung",
      "team": 2, // Vice Chair
    },
    {
      "name": "Dale, Anders",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "amdale@health.ucsd.edu",
      "title": "Professor",
      "profileUrl": "http://profiles.ucsd.edu/anders.dale",
      "team": null,
    },
    {
      "name": "Dorros, Stephen",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Vice Chair of Business Development",
      "modality": "Musculoskeletal Imaging",
      "degree": "MD",
      "email": "sdorros@health.ucsd.edu",
      "title": "(HS) Clinical Professor",
      "profileUrl": "http://profiles.ucsd.edu/stephen.dorros",
      "team": 2, // Vice Chair
    },
    {
      "name": "Du, Jiang",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "jiangdu@health.ucsd.edu",
      "title": "Professor / In Residence",
      "profileUrl": "http://profiles.ucsd.edu/jiang.du",
      "team": null,
    },
    {
      "name": "El Kaffas, Ahmed",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "aelkaffas@health.ucsd.edu",
      "title": "Associate Professor/In Residence",
      "profileUrl": "https://profiles.ucsd.edu/admed.elkaffas",
      "team": null,
    },
    {
      "name": "Elmi, Azadeh",
      "role": null,
      "modality": "Breast Imaging",
      "degree": "MD",
      "email": "aelmi@health.ucsd.edu",
      "title": "(HS) Associate Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1747345540/Azadeh_Elmi_Headshot_Breast_fiprhv.jpg",
      "team": null,
    },
    {
      "name": "Farid, Nikdokht",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Neuroimaging",
      "degree": "MD",
      "email": "nfarid@health.ucsd.edu",
      "title": "(HS) Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855643/Niky_Farid_rikonv.jpg",
      "profileUrl": "http://profiles.ucsd.edu/nikdokht.farid",
      "team": null,
    },
    {
      "name": "Fazeli, Soudabeh",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Director, Breast Imaging Fellowship Program",
      "modality": "Breast Imaging",
      "degree": "MD",
      "email": "sfazelidehkordy@health.ucsd.edu",
      "title": "(HS) Assistant Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855643/Soudah_Fazeli_q1h1cr.jpg",
      "team": 4,
    },
    {
      "name": "Fliszar, Evelyne",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Musculoskeletal Imaging",
      "degree": "MD",
      "email": "efliszar@health.ucsd.edu",
      "title": "(HS) Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855646/Evelyne_Fliszar_nu1erv.jpg",
      "profileUrl": "http://profiles.ucsd.edu/evelyne.fliszar",
      "team": null,
    },
    {
      "name": "Frank, Lawrence",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "lrfrank@health.ucsd.edu",
      "title": "Professor",
      "profileUrl": "http://profiles.ucsd.edu/lawrence.frank",
      "team": null,
    },
    {
      "name": "Gamie, Sherief",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Division Chief",
      "modality": "Nuclear Medicine",
      "degree": "MD PhD",
      "email": "sgamie@health.ucsd.edu",
      "title": "(HS) Clinical Professor",
      "profileUrl": "http://profiles.ucsd.edu/sherief.gamie",
      "team": 3, // Division Chief
    },
    {
      "name": "Gentili, Amilcare",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Musculoskeletal Imaging",
      "degree": "MD",
      "email": "agentili@health.ucsd.edu",
      "title": "Professor of Clinical",
      "profileUrl": "http://profiles.ucsd.edu/amilcare.gentili",
      "team": null,
    },
    {
      "name": "Gordon, Emile",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Cardiothoracic Imaging",
      "degree": "MD",
      "email": "emgordon@health.ucsd.edu",
      "title": "Assistant Professor of Clinical",
      "profileUrl": "http://profiles.ucsd.edu/emile.gordon",
      "team": null,
    },
    {
      "name": "Hahn, Michael",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Director, Body Imaging Fellowship Program",
      "modality": "Body Imaging",
      "degree": "MD PhD",
      "email": "mehahn@health.ucsd.edu",
      "title": "Associate Professor of Clinical",
      "profileUrl": "http://profiles.ucsd.edu/michael.hahn",
      "team": 4,
    },
    {
      "name": "Halgren, Eric",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "ehalgren@health.ucsd.edu",
      "title": "Professor",
      "profileUrl": "http://profiles.ucsd.edu/eric.halgren",
      "team": null,
    },
    {
      "name": "Hall, David",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "djhall@health.ucsd.edu",
      "title": "Adjunct Professor",
      "profileUrl": "http://profiles.ucsd.edu/david.hall",
      "team": null,
    },
    {
      "name": "Handwerker, Jason",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Vice Chair of Quality & Safety",
      "modality": "Neuroimaging",
      "degree": "MD",
      "email": "jhandwerker@health.ucsd.edu",
      "title": "(HS) Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855645/Jason_Handwerker_vulmrs.jpg",
      "profileUrl": "https://providers.ucsd.edu/details/32533/radiology",
      "team": 2, // Vice Chair
    },
    {
      "name": "Hawley, Daniel",
      "focus1": "Clinical",
      "focus2": null,
      "role": "MRI Modality Chief",
      "modality": "Neuroimaging",
      "degree": "MD",
      "email": "dhawley@health.ucsd.edu",
      "title": "(HS) Clinical Professor",
      "profileUrl": "http://profiles.ucsd.edu/daniel.hawley",
      "team": 4,
    },
    {
      "name": "Hero Chung, Jonathan",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Division Chief",
      "modality": "Cardiothoracic Imaging",
      "degree": "MD",
      "email": "jherochung@health.ucsd.edu",
      "title": "Professor of Clinical",
      "profileUrl": "http://profiles.ucsd.edu/jonathan.herochung",
      "team": 3, // Division Chief
    },
    {
      "name": "Horowitz, Michael",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Director, Cardiothoracic Imaging Fellowship Program",
      "modality": "Cardiothoracic Imaging",
      "degree": "MD PhD",
      "email": "mjhorowitz@health.ucsd.edu",
      "title": "(HS) Associate Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855644/Michael_Horowitz_ow5iga.jpg",
      "profileUrl": "https://profiles.ucsd.edu/michael.horowitz",
      "team": 4,
    },
    {
      "name": "Hsiao, Albert",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Cardiothoracic Imaging",
      "degree": "MD PhD",
      "email": "a3hsiao@health.ucsd.edu",
      "title": "Professor In Residence",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855648/Albert_Hsiao_tpg3te.jpg",
      "profileUrl": "http://profiles.ucsd.edu/albert.hsiao",
      "team": null,
    },
    {
      "name": "Huang, Brady",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Division Chief",
      "modality": "Musculoskeletal Imaging",
      "degree": "MD",
      "email": "b4huang@health.ucsd.edu",
      "title": "(HS) Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855647/Brady_Huang_zbfpre.jpg",
      "profileUrl": "http://profiles.ucsd.edu/brady.huang",
      "team": 3, // Division Chief
    },
    {
      "name": "Huang, Mingxiong",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "mxhuang@health.ucsd.edu",
      "title": "Adjunct Professor",
      "profileUrl": "http://profiles.ucsd.edu/mingxiong.huang",
      "team": null,
    },
    {
      "name": "Ingraham, Christopher",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Interventional Radiology",
      "degree": "MD",
      "email": "cingraham@health.ucsd.edu",
      "title": "(HS) Associate Clinical Professor",
      "profileUrl": "http://profiles.ucsd.edu/christopher.ingraham",
      "team": null,
    },
    {
      "name": "Jaffray, Paul",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Division Chief, Emergency Radiology",
      "modality": "Emergency Radiology",
      "degree": "MD",
      "email": "pjaffray@health.ucsd.edu",
      "title": "(HS) Associate Clinical Professor",
      "profileUrl": "https://providers.ucsd.edu/details/1336136614/radiology",
      "team": 3, // Division Chief
    },
    {
      "name": "Jerban, Saeed",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "sjerban@health.ucsd.edu",
      "title": "Assistant Adjunct Professor",
      "profileUrl": "http://profiles.ucsd.edu/saeed.jerban",
      "team": null,
    },
    {
      "name": "Jernigan, Terry",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "tjernigan@health.ucsd.edu",
      "title": "Professor",
      "profileUrl": "http://www.cogsci.ucsd.edu/~jernigan/",
      "team": null,
    },
    {
      "name": "Khurana, Aman",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Body Imaging",
      "degree": "MD MBBS",
      "email": "a1khurana@health.ucsd.edu",
      "title": "Associate Professor of Clinical",
      "profileUrl": "http://profiles.ucsd.edu/aman.khurana",
      "team": null,
    },
    {
      "name": "Liau, Joy",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Body Imaging",
      "degree": "MD PhD",
      "email": "jliau@health.ucsd.edu",
      "title": "(HS) Associate Clinical Professor",
      "profileUrl": "https://profiles.ucsd.edu/joy.liau",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1747345543/Joy_Liau_Body_Headshot_wycw5a.jpg",
      "team": null,
    },
    {
      "name": "Lim, Vivian",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Body Imaging",
      "degree": "MD",
      "email": "vlim@health.ucsd.edu",
      "title": "Assistant Professor of Clinical",
      "profileUrl": "http://profiles.ucsd.edu/vivian.lim",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855642/Vivian_Lim_ojeqk3.jpg",
      "team": null,
    },
    {
      "name": "Liu, Thomas",
      "focus1": "Research",
      "focus2": null,
      "role": "Vice Chair of Research", // Use this, not viceChairTitle
      "modality": null,
      "degree": "PhD MBA",
      "email": "ttliu@health.ucsd.edu",
      "title": "Professor",
      "profileUrl": "http://profiles.ucsd.edu/thomastao-ming.liu",
      "team": TEAM_VICE_CHAIRS,
      "imageUrl": null // or actual image if available
    },
    {
      "name": "Loehfelm, Thomas",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Body Imaging",
      "degree": "MD PhD",
      "email": "tloehfelm@health.ucsd.edu",
      "title": "Associate Professor of Clinical",
      "profileUrl": "http://profiles.ucsd.edu/thomas.loehfelm",
      "team": null,
    },
    {
      "name": "Ma, Yajun",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "yam013@health.ucsd.edu",
      "title": "Associate Adjunct Professor",
      "profileUrl": "http://profiles.ucsd.edu/yajun.ma",
      "team": null,
    },
    {
      "name": "Marek Bykowski, Julie",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Division Chief",
      "modality": "Neuroimaging",
      "degree": "MD",
      "email": "jbykowski@health.ucsd.edu",
      "title": "Professor of Clinical",
      "profileUrl": "http://profiles.ucsd.edu/julie.marekbykowski",
      "team": 3, // Division Chief
    },
    {
      "name": "Marks, Robert",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Division Chief",
      "modality": "Body Imaging",
      "degree": "MD",
      "email": "rmarks@health.ucsd.edu",
      "title": "(HS) Clinical Professor",
      "profileUrl": "http://profiles.ucsd.edu/robert.marks",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1747345550/Robert_Marks_Body_Headshot_m6mq6l.jpg",
      "team": 3, // Division Chief
    },
    {
      "name": "Mcnamee, Cairine",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Body Imaging",
      "degree": "MD",
      "email": "cmcnamee@health.ucsd.edu",
      "title": "(HS) Assistant Clinical Professor",
      "profileUrl": "http://profiles.ucsd.edu/cairine.mcnamee",
      "team": null,
    },
    {
      "name": "Mcveigh, Elliot",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "emcveigh@health.ucsd.edu",
      "title": "Professor",
      "profileUrl": "http://profiles.ucsd.edu/elliot.mcveigh",
      "team": null,
    },
    {
      "name": "Meisinger, Quinn",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Program Director, IRDR Residency Program",
      "modality": "Interventional Radiology",
      "degree": "MD",
      "email": "qmeisinger@health.ucsd.edu",
      "title": null,
      "profileUrl": "http://profiles.ucsd.edu/quinn.meisinger",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1747345560/Quinn_Meisinger_IR_IR_Res_Director_Headshot_tuptkk.jpg",
      "team": 4,
    },
    {
      "name": "Minocha, Jeet",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Division Chief",
      "modality": "Interventional Radiology",
      "degree": "MD",
      "email": "jminocha@health.ucsd.edu",
      "title": "Professor of Clinical",
      "profileUrl": "http://profiles.ucsd.edu/jeet.minocha",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1747345548/Jeet_Minocha_IR_Chief_Headshot_ukqfdf.jpg",
      "team": 3, // Division Chief
    },
    {
      "name": "Miyazaki, Mitsue",
      "focus1": "Research",
      "focus2": null,
      "role": null,
      "modality": null,
      "degree": "PhD",
      "email": "mimiyazaki@health.ucsd.edu",
      "title": "Adjunct Professor",
      "profileUrl": "http://profiles.ucsd.edu/mitsue.miyazaki",
      "team": null,
    },
    {
      "name": "Murphy, Paul",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Vice Chair of Information Technology",
      "modality": "Body Imaging",
      "degree": "MD PhD",
      "email": "pmmurphy@health.ucsd.edu",
      "title": "(HS) Associate Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855643/Paul_Murphy_a2jpgd.jpg",
      "profileUrl": "http://profiles.ucsd.edu/paul.murphy",
      "team": 2, // Vice Chair
    },
    {
      "name": "Newton, Isabel",
      "focus1": "Clinical",
      "focus2": "Research",
      "role": null,
      "modality": "Interventional Radiology",
      "degree": "MD PhD",
      "email": "inewton@health.ucsd.edu",
      "title": "(HS) Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855645/Isabel_Newton_mxaegd.jpg",
      "profileUrl": "http://profiles.ucsd.edu/isabel.newton",
      "team": null,
    },
    {
      "name": "Ojeda-Fournier, Haydee",
      "focus1": "Clinical",
      "focus2": null,
      "role": "Division Chief",
      "modality": "Breast Imaging",
      "degree": "MD",
      "email": "hojeda@health.ucsd.edu",
      "title": "(HS) Clinical Professor",
      "profileUrl": "http://profiles.ucsd.edu/haydee.ojeda-fournier",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1747345543/Haydee_Ojeda_Fournier_Breast_SD_HEADSHOTS_FORWEB_afq8cu.jpg",
      "team": 3,
    },
    {
      "name": "Parikh, Rupal",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Interventional Radiology",
      "degree": "MD",
      "email": "ruparikh@health.ucsd.edu",
      "title": "(HS) Assistant Clinical Professor",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1747345543/Rupal_Parikh_drjhas.jpg",
      "profileUrl": "http://profiles.ucsd.edu/rupal.parikh",
      "team": null,
    },
    {
      "name": "Pathria, Mini",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Musculoskeletal Imaging",
      "degree": "MD",
      "email": "mpathria@health.ucsd.edu",
      "title": "Professor of Clinical",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855644/Mini_Pathria_abqz1y.jpg",
      "profileUrl": "http://profiles.ucsd.edu/mini.pathria",
      "team": null,
    },
    {
      "name": "Pohlen, Michael",
      "focus1": "Clinical",
      "focus2": null,
      "role": null,
      "modality": "Cardiothoracic Imaging",
      "degree": "MD",
      "email": "mpohlen@health.ucsd.edu",
      "title": "Assistant Professor of Clinical",
      "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855644/Michael_Pohlen_wjnmzp.jpg",
      "profileUrl": "http://profiles.ucsd.edu/michael.pohlen",
      "team": null,
    },
    {
      "name": "Anaya, Sonia",
      "focus1": "Administration",
      "focus2": null,
      "role": "Interim Administrative Vice Chair",
      "modality": null,
      "degree": null,
      "email": "sanaya@health.ucsd.edu",
      "title": "Interim Administrative Vice Chair",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Savoie, Joseph",
      "focus1": "Administration",
      "focus2": null,
      "role": "Senior Director, Radiology",
      "modality": null,
      "degree": "MHA",
      "email": "jsavoie@health.ucsd.edu",
      "title": "Senior Director, Radiology",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Utt, Whitney",
      "focus1": "Administration",
      "focus2": null,
      "role": "Interim Director, Radiology Nursing",
      "modality": null,
      "degree": "MSOL BSN CCRN",
      "email": "wutt@health.ucsd.edu",
      "title": "Interim Director, Radiology Nursing",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Ramirez, Lorena",
      "focus1": "Administration",
      "focus2": null,
      "role": "Director of Radiology, La Jolla",
      "modality": null,
      "degree": null,
      "email": "L5ramirez@health.ucsd.edu",
      "title": "Director of Radiology, La Jolla",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Wendorf, Chloee",
      "focus1": "Administration",
      "focus2": null,
      "role": "Technical Director, Imaging Services",
      "modality": null,
      "degree": "MHA CNMT",
      "email": "cwendorf@health.ucsd.edu",
      "title": "Technical Director, Imaging Services",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Vanderpool, John",
      "focus1": "Administration",
      "focus2": null,
      "role": "Radiology/Imaging Multi-Modality Manager, Hillcrest Campus",
      "modality": null,
      "degree": "MBA BS NMTCB (CNMT)(PET) RT (CT)",
      "email": "jvanderpool@health.ucsd.edu",
      "title": "Radiology/Imaging Multi-Modality Manager, Hillcrest Campus",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Lee, Edward",
      "focus1": "Administration",
      "focus2": null,
      "role": "Director of Radiology, Hillcrest",
      "modality": null,
      "degree": null,
      "email": "Ewl002@health.ucsd.edu",
      "title": "Director of Radiology, Hillcrest",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Gergen, Sandra",
      "focus1": "Administration",
      "focus2": null,
      "role": "Director of Radiology/Cardiology, East Campus",
      "modality": null,
      "degree": "ARRT(R)",
      "email": "sgergen@health.ucsd.edu",
      "title": "Director of Radiology/Cardiology, East Campus",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Cruz, Jeannie",
      "focus1": "Administration",
      "focus2": null,
      "role": "Interim Administrative Director of Clinical Operations",
      "modality": null,
      "degree": null,
      "email": "jcruz@health.ucsd.edu",
      "title": "Interim Administrative Director of Clinical Operations",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Hernandez, Olivia",
      "focus1": "Administration",
      "focus2": null,
      "role": "Project Coordinator & Assistant to the Chair’s Office",
      "modality": null,
      "degree": null,
      "email": "ohernandez@health.ucsd.edu",
      "title": "Project Coordinator & Assistant to the Chair’s Office",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Robles, Angelica",
      "focus1": "Administration",
      "focus2": null,
      "role": "Human Resources Manager",
      "modality": null,
      "degree": null,
      "email": "arobles@health.ucsd.edu",
      "title": "Human Resources Manager",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Gonzalez, Blanca",
      "focus1": "Administration",
      "focus2": null,
      "role": "Director of Academic Affairs",
      "modality": null,
      "degree": null,
      "email": "B3gonzalez@health.ucsd.edu",
      "title": "Director of Academic Affairs",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Mariaca, Cristi",
      "focus1": "Administration",
      "focus2": null,
      "role": "Academic Affairs Analyst",
      "modality": null,
      "degree": null,
      "email": "cmariaca@health.ucsd.edu",
      "title": "Academic Affairs Analyst",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Dang, Myra",
      "focus1": "Administration",
      "focus2": null,
      "role": "Fellowship & Education Coordinator",
      "modality": null,
      "degree": null,
      "email": "mndang@health.ucsd.edu",
      "title": "Fellowship & Education Coordinator",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Ghobrial, Eman",
      "focus1": "Administration",
      "focus2": null,
      "role": "Information System Analyst",
      "modality": null,
      "degree": null,
      "email": "eghobrial@health.ucsd.edu",
      "title": "Information System Analyst",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Brown, Dion",
      "focus1": "Administration",
      "focus2": null,
      "role": "Residency Program Administrator",
      "modality": null,
      "degree": null,
      "email": "dibrown@health.ucsd.edu",
      "title": "Residency Program Administrator",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Garcia, Angelica",
      "focus1": "Administration",
      "focus2": null,
      "role": "Administrative Supervisor",
      "modality": null,
      "degree": null,
      "email": "aygarcia@health.ucsd.edu",
      "title": "Administrative Supervisor",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Valencia-Avendano, Isaac",
      "focus1": "Administration",
      "focus2": null,
      "role": "Executive Assistant",
      "modality": null,
      "degree": null,
      "email": "ivalenciaavendano@health.ucsd.edu",
      "title": "Executive Assistant",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Yanez, Mariana",
      "focus1": "Administration",
      "focus2": null,
      "role": "Executive Assistant",
      "modality": null,
      "degree": null,
      "email": "M4yanez@health.ucsd.edu",
      "title": "Executive Assistant",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Keane, Audrey",
      "focus1": "Administration",
      "focus2": null,
      "role": "Executive Assistant",
      "modality": null,
      "degree": null,
      "email": "adkeane@health.ucsd.edu",
      "title": "Executive Assistant",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Gomez, Delia",
      "focus1": "Administration",
      "focus2": null,
      "role": "Executive Assistant",
      "modality": null,
      "degree": null,
      "email": "dmunozol@health.ucsd.edu",
      "title": "Executive Assistant",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Hernandez, Alma",
      "focus1": "Administration",
      "focus2": null,
      "role": "Financial Specialist",
      "modality": null,
      "degree": null,
      "email": "alhernandez@health.ucsd.edu",
      "title": "Financial Specialist",
      "profileUrl": null,
      "team": null
    },
    {
      "name": "Salas, Yanira",
      "focus1": "Administration",
      "focus2": null,
      "role": "Financial Specialist",
      "modality": null,
      "degree": null,
      "email": "ysalas@health.ucsd.edu",
      "title": "Financial Specialist",
      "profileUrl": null,
      "team": null
    },
  ];

// Assign team numbers for grouping
const TEAM_ADMIN_LEADERSHIP = 1;
const TEAM_VICE_CHAIRS = 2;
const TEAM_DIVISION_CHIEFS = 3;

// Administrative Leadership (team: 1)
const administrativeLeadership = [
  {
    "name": "Anaya, Sonia",
    "focus1": "Administration",
    "focus2": null,
    "role": "Interim Administrative Vice Chair",
    "modality": null,
    "degree": null,
    "email": "sanaya@health.ucsd.edu",
    "title": "Interim Administrative Vice Chair",
    "imageUrl": null,
    "profileUrl": null,
    "team": TEAM_ADMIN_LEADERSHIP
  },
  {
    "name": "Savoie, Joseph",
    "focus1": "Administration",
    "focus2": null,
    "role": "Senior Director, Radiology",
    "modality": null,
    "degree": "MHA",
    "email": "jsavoie@health.ucsd.edu",
    "title": "Senior Director, Radiology",
    "imageUrl": null,
    "profileUrl": null,
    "team": TEAM_ADMIN_LEADERSHIP
  },
  {
    "name": "Utt, Whitney",
    "focus1": "Administration",
    "focus2": null,
    "role": "Interim Director, Radiology Nursing",
    "modality": null,
    "degree": "MSOL BSN CCRN",
    "email": "wutt@health.ucsd.edu",
    "title": "Interim Director, Radiology Nursing",
    "imageUrl": null,
    "profileUrl": null,
    "team": TEAM_ADMIN_LEADERSHIP
  },
  {
    "name": "Ramirez, Lorena",
    "focus1": "Administration",
    "focus2": null,
    "role": "Director of Radiology, La Jolla",
    "modality": null,
    "degree": null,
    "email": "L5ramirez@health.ucsd.edu",
    "title": "Director of Radiology, La Jolla",
    "imageUrl": null,
    "profileUrl": null,
    "team": TEAM_ADMIN_LEADERSHIP
  },
  {
    "name": "Wendorf, Chloee",
    "focus1": "Administration",
    "focus2": null,
    "role": "Technical Director, Imaging Services",
    "modality": null,
    "degree": "MHA CNMT",
    "email": "cwendorf@health.ucsd.edu",
    "title": "Technical Director, Imaging Services",
    "imageUrl": null,
    "profileUrl": null,
    "team": TEAM_ADMIN_LEADERSHIP
  },
  {
    "name": "Vanderpool, John",
    "focus1": "Administration",
    "focus2": null,
    "role": "Radiology/Imaging Multi-Modality Manager, Hillcrest Campus",
    "modality": null,
    "degree": "MBA BS NMTCB (CNMT)(PET) RT (CT)",
    "email": "jvanderpool@health.ucsd.edu",
    "title": "Radiology/Imaging Multi-Modality Manager, Hillcrest Campus",
    "imageUrl": null,
    "profileUrl": null,
    "team": TEAM_ADMIN_LEADERSHIP
  },
  {
    "name": "Lee, Edward",
    "focus1": "Administration",
    "focus2": null,
    "role": "Director of Radiology, Hillcrest",
    "modality": null,
    "degree": null,
    "email": "Ewl002@health.ucsd.edu",
    "title": "Director of Radiology, Hillcrest",
    "imageUrl": null,
    "profileUrl": null,
    "team": TEAM_ADMIN_LEADERSHIP
  },
  {
    "name": "Gergen, Sandra",
    "focus1": "Administration",
    "focus2": null,
    "role": "Director of Radiology/Cardiology, East Campus",
    "modality": null,
    "degree": "ARRT(R)",
    "email": "sgergen@health.ucsd.edu",
    "title": "Director of Radiology/Cardiology, East Campus",
    "imageUrl": null,
    "profileUrl": null,
    "team": TEAM_ADMIN_LEADERSHIP
  },
  {
    "name": "Cruz, Jeannie",
    "focus1": "Administration",
    "focus2": null,
    "role": "Interim Administrative Director of Clinical Operations",
    "modality": null,
    "degree": null,
    "email": "jcruz@health.ucsd.edu",
    "title": "Interim Administrative Director of Clinical Operations",
    "imageUrl": null,
    "profileUrl": null,
    "team": TEAM_ADMIN_LEADERSHIP
  }
];

// Vice Chairs (team: 2)
const viceChairs = [
  {
    "name": "Chung, Christine",
    "focus1": "Clinical",
    "focus2": "Research",
    "role": "Department Chair",
    "modality": "Musculoskeletal Imaging",
    "degree": "MD MBA",
    "email": "cbchung@health.ucsd.edu",
    "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855646/Chung_Christine_tlj4s5.jpg",
    "profileUrl": "http://profiles.ucsd.edu/christine.chung",
    "team": TEAM_VICE_CHAIRS
  },
  {
    "name": "Dorros, Stephen",
    "focus1": "Clinical",
    "focus2": null,
    "role": "Vice Chair of Business Development",
    "modality": "Musculoskeletal Imaging",
    "degree": "MD",
    "email": "sdorros@health.ucsd.edu",
    "profileUrl": "http://profiles.ucsd.edu/stephen.dorros",
    "team": TEAM_VICE_CHAIRS
  },
  {
    "name": "Liu, Thomas",
    "focus1": "Research",
    "focus2": null,
    "role": "Vice Chair of Research",
    "modality": null,
    "degree": "PhD MBA",
    "email": "ttliu@health.ucsd.edu",
    "profileUrl": "http://profiles.ucsd.edu/thomastao-ming.liu",
    "team": TEAM_VICE_CHAIRS
  },
  {
    "name": "Murphy, Paul",
    "focus1": "Clinical",
    "focus2": null,
    "role": "Vice Chair of Information Technology",
    "modality": "Body Imaging",
    "degree": "MD PhD",
    "email": "pmmurphy@health.ucsd.edu",
    "title": "(HS) Associate Clinical Professor",
    "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855643/Paul_Murphy_a2jpgd.jpg",
    "profileUrl": "http://profiles.ucsd.edu/paul.murphy",
    "team": TEAM_VICE_CHAIRS
  },
  {
    "name": "Handwerker, Jason",
    "focus1": "Clinical",
    "focus2": null,
    "role": "Vice Chair of Quality & Safety",
    "modality": "Neuroimaging",
    "degree": "MD",
    "email": "jhandwerker@health.ucsd.edu",
    "title": "(HS) Clinical Professor",
    "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855645/Jason_Handwerker_vulmrs.jpg",
    "profileUrl": "https://providers.ucsd.edu/details/32533/radiology",
    "team": TEAM_VICE_CHAIRS
  },
  {
    "name": "Sinha, Shantanu",
    "focus1": "Research",
    "focus2": null,
    "role": "Vice Chair of Academic Affairs",
    "modality": null,
    "degree": "PhD",
    "email": "ssinha@health.ucsd.edu",
    "title": "Professor",
    "profileUrl": "http://profiles.ucsd.edu/shantanu.sinha",
    "team": TEAM_VICE_CHAIRS
  },
  {
    "name": "Santillan, Cynthia",
    "focus1": "Clinical",
    "focus2": null,
    "role": "Vice Chair of Clinical Operations",
    "modality": "Body Imaging",
    "degree": "MD",
    "email": "csantillan@health.ucsd.edu",
    "title": "(HS) Clinical Professor",
    "profileUrl": "https://providers.ucsd.edu/details/1760597632/radiology",
    "team": TEAM_VICE_CHAIRS
  },
  {
    "name": "Farid, Nikdokht",
    "focus1": "Clinical",
    "focus2": null,
    "role": "Vice Chair of Education",
    "modality": "Neuroimaging",
    "degree": "MD",
    "email": "nfarid@health.ucsd.edu",
    "title": "(HS) Clinical Professor",
    "imageUrl": "https://res.cloudinary.com/dn78hfybw/image/upload/c_fill,ar_3:4,g_auto/v1744855643/Niky_Farid_rikonv.jpg",
    "profileUrl": "https://providers.ucsd.edu/details/1033283702/radiology",
    "team": TEAM_VICE_CHAIRS
  }
];

// Division Chiefs (team: 3)
const divisionChiefs = [
  // Example: Add all with "Division Chief" in their role, and Paul Jaffray (Emergency Radiology)
  ...window.facultyJson.filter(f =>
    f.role && f.role.toLowerCase().includes("division chief")
  ).map(f => ({ ...f, team: TEAM_DIVISION_CHIEFS })),
  {
    "name": "Jaffray, Paul",
    "focus1": "Clinical",
    "focus2": null,
    "role": "Division Chief, Emergency Radiology",
    "modality": "Emergency Radiology",
    "degree": "MD",
    "email": "pjaffray@health.ucsd.edu",
    "title": "(HS) Associate Clinical Professor",
    "profileUrl": "https://providers.ucsd.edu/details/1336136614/radiology",
    "team": TEAM_DIVISION_CHIEFS
  }
];

// Assign team numbers for everyone in facultyJson
window.facultyJson.forEach(faculty => {
  if (
    faculty.role &&
    (
      faculty.role.toLowerCase().includes("division chief") ||
      faculty.role.toLowerCase().includes("division chief,")
    )
  ) {
    faculty.team = TEAM_DIVISION_CHIEFS;
  } else if (
    faculty.role &&
    faculty.role.toLowerCase().includes("vice chair")
  ) {
    faculty.team = TEAM_VICE_CHAIRS;
  } else if (
    faculty.role &&
    (
      faculty.role.toLowerCase().includes("director of radiology") ||
      faculty.role.toLowerCase().includes("administrative vice chair") ||
      faculty.role.toLowerCase().includes("technical director") ||
      faculty.role.toLowerCase().includes("manager")
    )
  ) {
    faculty.team = TEAM_ADMIN_LEADERSHIP;
  }
  // You can add more rules for team 4 or others as needed
});

document.addEventListener("DOMContentLoaded", function () {
    const rawFacultyData = window.facultyJson || [];
    const DEFAULT_IMG = "https://cdn.prod.website-files.com/6654eb861fcc442c666a548c/680ae7d8fa435d4844a7d9c0_Profile_avatar_placeholder_large.png";
    const ITEMS_PER_PAGE = 10;
    let currentPage = 1;

    const focusLabels = {}, modalityLabels = {};
    let nextFocusId = 1, nextModalityId = 1;

    rawFacultyData.forEach(m => {
      const focusText = m.focus2 ? `${m.focus1}, ${m.focus2}` : m.focus1;
      if (focusText && !focusLabels[focusText]) focusLabels[focusText] = nextFocusId++;
      if (m.modality && !modalityLabels[m.modality]) modalityLabels[m.modality] = nextModalityId++;
    });

    const focusLookup = Object.fromEntries(Object.entries(focusLabels).map(([k, v]) => [v, k]));
    const modalityLookup = Object.fromEntries(Object.entries(modalityLabels).map(([k, v]) => [v, k]));

    const TEAM_LABELS = {
      1: "Administrative Leadership",
      2: "Vice Chairs",
      3: "Division Chiefs"
    };

    const facultyData = rawFacultyData.map(m => {
      let displayName = m.name;
      if (m.name.includes(",")) {
        const [last, first] = m.name.split(',').map(s => s.trim());
        displayName = `${first} ${last}`.replace(/,/g, "");
      }
      const focusText = m.focus2 ? `${m.focus1}, ${m.focus2}` : m.focus1;
      return {
        displayName: displayName.replace(/,/g, ""),
        degree: m.degree ? m.degree.replace(/,/g, "") : "",
        focus: focusLabels[focusText] || null,
        modality: m.modality ? modalityLabels[m.modality] : null,
        email: m.email.replace(/\.edui$/, ".edu").replace(/@ucsd\.edu$/, "@health.ucsd.edu"),
        imageUrl: m.imageUrl || DEFAULT_IMG,
        profileUrl: m.profileUrl || '#',
        team: m.team,
        teamLabel: TEAM_LABELS[m.team] || "",
        role: m.role || ""
      };
    }).filter(f => f.displayName && f.degree && f.email);

    const container = document.getElementById("faculty-results");
    const searchInput = document.getElementById("faculty-search");
    const filterPrimary = document.getElementById("filter-primary");
    const filterDivision = document.getElementById("filter-division");
    const resetButton = document.getElementById("reset-filters");
    const resultsCount = document.createElement("div"); // Create results count element
    resultsCount.id = "results-count";
    resultsCount.className = "results-count";
    resetButton.insertAdjacentElement("afterend", resultsCount); // Place it next to the reset button

    const getFocusLabel = id => focusLookup[id] || "—";
    const getModalityLabel = id => modalityLookup[id] || "—";

    function renderFacultyCards(arr) {
      container.innerHTML = "";

      const totalPages = Math.ceil(arr.length / ITEMS_PER_PAGE);
      const start = (currentPage - 1) * ITEMS_PER_PAGE;
      const end = Math.min(start + ITEMS_PER_PAGE, arr.length);
      const pageData = arr.slice(start, end);

      // Update results count
      resultsCount.textContent = `Showing ${start + 1}–${end} of ${facultyData.length} results`;

      pageData.forEach(m => {
        const card = document.createElement("a"); // Make the entire card a link
        card.className = "profile-card faculty";
        card.href = m.profileUrl;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        const imgWrapper = document.createElement("div");
        imgWrapper.innerHTML = `<img src="${m.imageUrl}" alt="${m.displayName}" class="image-card" />`;
        card.appendChild(imgWrapper);

        const overlay = document.createElement("div");
        overlay.className = "profile-card-overlay";
        overlay.innerHTML = `
          <div class="text-size-small text-height-125">
            ${m.displayName.replace(/,/g, "")}${m.degree ? " " + m.degree : ""}
          </div>
          <div class="text-size-tiny text-color-secondary">
            ${getFocusLabel(m.focus)}
          </div>
          <div class="text-size-tiny text-style-light text-height-125">
            ${getModalityLabel(m.modality)}
          </div>
          <div class="text-size-tiny text-color-secondary">
            ${m.role}
          </div>
          <a href="mailto:${m.email}" class="email-link" style="pointer-events: auto;">
            <div class="text-size-tiny">${m.email}</div>
          </a>
        `;
        card.appendChild(overlay);

        container.appendChild(card);
      });

      document.querySelectorAll('.pagination').forEach(pag => {
        pag.innerHTML = "";
        if (totalPages <= 1) return;
        for (let i = 1; i <= totalPages; i++) {
          const btn = document.createElement("button");
          btn.className = "page-button";
          btn.textContent = i;
          if (i === currentPage) btn.disabled = true;
          btn.addEventListener("click", () => {
            currentPage = i;
            renderFacultyCards(filteredFaculty());

            const directoryEl = document.getElementById("directory");
            if (directoryEl) {
              directoryEl.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          });
          pag.appendChild(btn);
        }
      });
    }

    function filteredFaculty() {
      const term = searchInput.value.trim().toLowerCase();
      const f = Number(filterPrimary.value);
      const d = Number(filterDivision.value);
      return facultyData.filter(m => {
        const textMatch = !term
          || m.displayName.toLowerCase().includes(term)
          || getFocusLabel(m.focus).toLowerCase().includes(term)
          || getModalityLabel(m.modality).toLowerCase().includes(term);
        const focusMatch = !f || m.focus === f;
        const modalityMatch = !d || m.modality === d;
        return textMatch && focusMatch && modalityMatch;
      });
    }

    Object.entries(focusLookup).forEach(([id, label]) =>
      filterPrimary.insertAdjacentHTML("beforeend", `<option value="${id}">${label}</option>`)
    );
    Object.entries(modalityLookup).forEach(([id, label]) =>
      filterDivision.insertAdjacentHTML("beforeend", `<option value="${id}">${label}</option>`)
    );

    [searchInput, filterPrimary, filterDivision].forEach(el =>
      el.addEventListener("input", () => {
        currentPage = 1;
        renderFacultyCards(filteredFaculty());
      })
    );
    resetButton.addEventListener("click", () => {
      searchInput.value = "";
      filterPrimary.value = "";
      filterDivision.value = "";
      currentPage = 1;
      renderFacultyCards(facultyData);
    });

    renderFacultyCards(facultyData);

    // Helper to render a section by team number
    function renderSectionByTeam(teamNumber, sectionId) {
      const section = document.getElementById(sectionId);
      if (!section) return;
      section.innerHTML = ""; // Clear previous content

      const group = facultyData.filter(m => m.team === teamNumber);
      group.forEach(m => {
        const card = document.createElement("a");
        card.className = "profile-card faculty";
        card.href = m.profileUrl;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        const imgWrapper = document.createElement("div");
        imgWrapper.innerHTML = `<img src="${m.imageUrl}" alt="${m.displayName}" class="image-card" />`;
        card.appendChild(imgWrapper);

        const overlay = document.createElement("div");
        overlay.className = "profile-card-overlay";
        overlay.innerHTML = `
          <div class="text-size-small text-height-125">
            ${m.displayName.replace(/,/g, "")}${m.degree ? " " + m.degree : ""}
          </div>
          <div class="text-size-tiny text-color-secondary">
            ${getFocusLabel(m.focus)}
          </div>
          <div class="text-size-tiny text-style-light text-height-125">
            ${getModalityLabel(m.modality)}
          </div>
          <div class="text-size-tiny text-color-secondary">
            ${m.role}
          </div>
          <a href="mailto:${m.email}" class="email-link" style="pointer-events: auto;">
            <div class="text-size-tiny">${m.email}</div>
          </a>
        `;
        card.appendChild(overlay);

        section.appendChild(card);
      });
    }

    // Render each section by team number and section ID
    renderSectionByTeam(1, "faculty-admin");      // Admin Leadership
    renderSectionByTeam(2, "faculty-vice");       // Vice Chairs
    renderSectionByTeam(3, "faculty-division");   // Division Chiefs
});