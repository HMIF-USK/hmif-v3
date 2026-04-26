import { IDepartment } from '@/types/department.type';

export const departmentList: IDepartment[] = [
  {
    departmentName: 'DPH',
    shortDesc: 'Dewan Pengurus Harian',
    slug: 'dph',
    work: [
      {
        workName: 'Ketua',
        desc: 'Memimpin rapat dan mengoordinasikan kepengurusan HMIF Universitas Syiah Kuala, menetapkan kebijakan penting, mengambil keputusan tertinggi, serta memastikan seluruh pengurus bekerja selaras demi tercapainya tujuan organisasi.',
      },
      {
        workName: 'Wakil Ketua',
        desc: ' Mendukung ketua umum dalam pengambilan kebijakan, menjalankan kegiatan harian, membangun kerja sama eksternal, serta memperkuat koordinasi dan komunikasi internal di HMIF Universitas Syiah Kuala.',
      },
      {
        workName: 'Sekretaris',
        desc: 'Menjadwalkan kegiatan HMIF selama satu periode, mengelola surat-menyurat dan LPJ, memberi masukan terkait administrasi kepada ketua umum, serta mengoordinasikan seluruh pengurus HMIF Universitas Syiah Kuala.',
      },
      {
        workName: 'Bendahara',
        desc: 'Mengelola keuangan HMIF, memberi masukan kepada ketua umum terkait kebijakan finansial, serta mengoordinasikan seluruh pengurus HMIF Universitas Syiah Kuala.',
      },
    ],
    photos: {
      desktop: [
        {
          title: 'bendahara',
          imgUrl: '/images/department/dph/bendahara.JPG',
        },
        {
          title: 'wakil ii',
          imgUrl: '/images/department/dph/wakil2.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/dph/ketua.JPG',
        },
        {
          title: 'wakil i',
          imgUrl: '/images/department/dph/wakil1.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/dph/sekretaris.JPG',
        },
      ],
      mobile: [
        {
          title: 'bendahara',
          imgUrl: '/images/department/dph/bendahara.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/dph/ketua.JPG',
        },
        {
          title: 'wakil i',
          imgUrl: '/images/department/dph/wakil1.JPG',
        },
        {
          title: 'wakil ii',
          imgUrl: '/images/department/dph/wakil2.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/dph/sekretaris.JPG',
        },
      ],
    },
  },
  {
    departmentName: 'PPM',
    shortDesc: 'Penelitian dan Pengembangan Mahasiswa',
    slug: 'ppm',
    division: ['SOFTWARE ENGINEERING', 'MACHINE LEARNING', 'INTERNET OF THINGS'],
    work: [
      {
        workName: 'Ngobar Bidang Minat',
        desc: ' Kegiatan ini berbentuk paparan dan diskusi tentang masing- masing bidang minat yang akan dilaksanakan secara luring. Pemaparan ini akan dijelaskan langsung oleh mahasiswa angkatan 2022yang dipercayakan untuk menjelaskan hal tersebut. Peserta dapat melakukan interaksi secara langsung kepada pemateri.',
      },
      {
        workName: 'Kuis IT',
        desc: ' Setiap minggu, HMIF menyelenggarakan kuis IT di media sosial dengan pertanyaan menarik seputar perkembangan terkini di dunia IT, termasuk pemrograman, data struktur, dan algoritma. ',
      },
      {
        workName: 'Website Development',
        desc: ' Program Web Development bertujuan untuk membantu mahasiswa menggali potensi diri, meningkatkan keterampilan, pengetahuan, dan pengalaman dalam bidang pengembangan web. Program ini dapat menjadi wadah bagi mahasiswa untuk mengembangkan diri dan meraih potensi terbaik mereka.',
      },
      {
        workName: 'Informatics Club',
        desc: 'Informatics Club merupakan sebuah wadah bagi para mahasiswa Informatika USK yang terdiri dari tiga divisi, yaitu Software, Machine Learning, dan IoT. Tujuan Informatics Club adalah untuk mempromosikan dan mengembangkan keahlian dalam bidang teknologi informasi, serta memberikan kesempatan bagi mahasiswa untuk saling berbagi pengetahuan dan pengalaman. Dengan adanya divisi-divisi tersebut, Informatics Club bertujuan untuk memfasilitasi pengembangan keahlian yang spesifik dan mendalam dalam bidang teknologi informasi.',
      },
      {
        workName: 'Instalasi Linux',
        desc: 'Acara ini mengenalkan penggunaan web server di Linux dan memberikan pemahaman dasar tentang sistem operasi ini. Kami akan bahas konsep dasar Linux, distribusinya, manfaatnya, serta panduan langkah demi langkah untuk mengatur web server di Linux.',
      },
      {
        workName: 'Tech Talk',
        desc: 'kegiatan ini adalah Pemaparan mengenai seluk beluk bekerja di pasar teknologi Indonesia, dimana narasumber akan menjelaskan overview dari semua carrier path yang bisa dipilih oleh undergraduate sebelum terjun ke dunia kerja, yang mana dilakukan secara luring.',
      },
    ],
    photos: {
      desktop: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/ppm/fullteam.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/ppm/wakil.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/ppm/ketua.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/ppm/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/ppm/anggota.JPG',
        },
      ],
      mobile: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/ppm/fullteam.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/ppm/ketua.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/ppm/wakil.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/ppm/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/ppm/anggota.JPG',
        },
      ],
    },
  },
  {
    departmentName: 'KOMINKRAF',
    shortDesc: 'Komunikasi Informasi dan Kreatif',
    slug: 'kominkraf',
    division: ['BRANDING', 'DESIGN', 'VIDIOGRAPHY'],
    work: [
      {
        workName: 'Support HMIF',
        desc: 'Support HMIF adalah proker yang menyediakan dukungan publikasi dan dokumentasi untuk kegiatan HMIF. Penyelenggara menghubungi PJ pubdok dan mengisi spreadsheet, lalu PJ menugaskan anggota sesuai kebutuhan. Detail permintaan disampaikan H-3/H-6 dan diingatkan kembali H-1 untuk memastikan kelancaran acara.',
      },
      {
        workName: 'Konten Tiktok',
        desc: 'Konten Tiktok adalah proker yang bertujuan untuk membuat dan mendistribusikan konten kreatif di platform Tiktok. Tim akan bekerja sama untuk merencanakan, merekam, dan mengedit video yang menarik serta relevan dengan kegiatan HMIF.',
      },
    ],
    photos: {
      desktop: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/kominkraf/fullteam.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/kominkraf/wakil.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/kominkraf/ketua.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/kominkraf/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/kominkraf/anggota.JPG',
        },
      ],
      mobile: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/kominkraf/fullteam.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/kominkraf/ketua.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/kominkraf/wakil.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/kominkraf/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/kominkraf/anggota.JPG',
        },
      ],
    },
  },
  {
    departmentName: 'SOSMAS',
    shortDesc: 'Sosial Masyarakat',
    slug: 'sosmas',
    work: [
      {
        workName: 'Takjil On The Road',
        desc: 'Takjil On The Road adalah proker yang bertujuan untuk membagikan takjil kepada masyarakat yang membutuhkan menjelang berbuka puasa. Tim akan berkolaborasi untuk menyiapkan dan mendistribusikan takjil secara langsung di lokasi-lokasi strategis.',
      },
      {
        workName: 'Dedikasi Informatika',
        desc: 'Dedikasi Informatika adalah proker yang bertujuan untuk memberikan layanan dan dukungan teknis kepada masyarakat dalam bidang teknologi informasi. Tim akan berkolaborasi untuk menyelenggarakan pelatihan, workshop, dan konsultasi terkait TI.',
      },
      {
        workName: 'Informatika Menyapa Panti',
        desc: 'Informatika Menyapa Panti adalah proker yang bertujuan untuk memberikan dukungan dan bantuan kepada panti asuhan melalui kegiatan sosial dan edukasi. Tim akan berkolaborasi untuk menyelenggarakan acara, penggalangan dana, dan program-program yang bermanfaat bagi anak-anak di panti asuhan.',
      },
      {
        workName: 'Informatika Peduli Sesama',
        desc: 'Informatika Peduli Sesama adalah proker yang bertujuan untuk memberikan dukungan dan bantuan kepada sesama melalui kegiatan sosial dan edukasi. Tim akan berkolaborasi untuk menyelenggarakan acara, penggalangan dana, dan program-program yang bermanfaat bagi masyarakat.',
      },
    ],
    photos: {
      desktop: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/sosmas/fullteam.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/sosmas/wakil.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/sosmas/ketua.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/sosmas/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/sosmas/anggota.JPG',
        },
      ],
      mobile: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/sosmas/fullteam.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/sosmas/ketua.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/sosmas/wakil.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/sosmas/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/sosmas/anggota.JPG',
        },
      ],
    },
  },
  {
    departmentName: 'PKM',
    shortDesc: 'Pengelola Kesejahteraan Mahasiswa',
    slug: 'pkm',
    division: ['Aspirasi Mahasiswa', 'Pemberdayaan Perempuan'],
    work: [
      {
        workName: 'INTEGER X UPGRADING',
        desc: 'Kegiatan tahunan yang diadakan dengan tujuan untuk menyambut generasi baru Informatika dan staff baru HMIF sekaligus mempererat silaturahmi antar angkatan',
      },
      {
        workName: 'Speed Silaturahmi',
        desc: 'Silaturahmi antar letting mahasiswi Informatika untuk mempererat kekeluargaan dan lebih saling mengenal satu sama lain.',
      },
      {
        workName: 'Peer Teaching',
        desc: 'bertujuan untuk meningkatka pemahaman materi, meningkatkan keterampilan komunikasi, dan memperkuat hubungan antar sesama mahasiswi.',
      },
      {
        workName: 'Inspiration of Women',
        desc: 'Inspiration of Women adalah sebuah platform digital yang dirancang khusus sebagai ruang aman bagi perempuan untuk berbagi cerita, pengalaman, serta mencari solusi atas berbagai permasalahan yang mereka hadapi.',
      },
      {
        workName: 'PAKARMARU',
        desc: 'kegiatan tahunan yang dilakukan untuk menyambut mahasiswa baru di lingkungan kampus dan memperkenalkan tentang jurusan',
      },
      {
        workName: 'INF-PEDIA',
        desc: 'Membuat feed/story ig dan video tiktok tentang informasi kecil seperti apa saja lab yang ada di jurusan, laboran, dan hal lainnya',
      },
      {
        workName: 'Guest Inspiring Talk',
        desc: 'GIT merupakan acara talkshow yang diadakan secara online, melalui live di instagram @hmif_usk',
      },
      {
        workName: 'Open Talk Informatic',
        desc: 'Kegiatan tahunan di Informatika dalam menyampaikan aspirasi, keluh kesah mahasiswa dan akan dijawab tuntas oleh jurusan',
      },
      {
        workName: 'HMIF Farewell',
        desc: 'Acara perpisahan himpunan ialah acara yang menjadikan momentum untuk mengucapkan terimakasih atas kerjasama selama satu periode dan pembubaran keanggotaan himpunan.',
      },
      {
        workName: 'Women Talk',
        desc: 'Talkshow inspiratif tentang memaksimalkan power wanita sdi masa sekarang.',
      },
    ],
    photos: {
      desktop: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/pkm/fullteam.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/pkm/wakil.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/pkm/ketua.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/pkm/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/pkm/anggota.JPG',
        },
      ],
      mobile: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/pkm/fullteam.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/pkm/ketua.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/pkm/wakil.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/pkm/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/pkm/anggota.JPG',
        },
      ],
    },
  },
  {
    departmentName: 'MBA',
    shortDesc: 'Minat Bakat dan Apresiasi',
    slug: 'mba',
    work: [
      {
        workName: 'Pekan Olahraga Informatika',
        desc: 'Kegiatan ini merupakan perlombaan di bidang olahraga antar leting (angkatan) yang dapat diikuti oleh seluruh mahasiswa/I aktif Informatika, Dosen/Staf dan alumni.',
      },
      {
        workName: 'HUT Informatika',
        desc: 'Kegiatan ini seperti Fun walk antara mahasiswa/I bersama para dosen dan staff informatika demi merayakan hari lahirnya jurusan Informatika. Fun walk digabung dengan sesi game dan seru seruan bersama.',
      },
      {
        workName: 'Olahraga Rutin',
        desc: 'Kegiatan olahraga yang akan dilakukan setiap minggu',
      },
      {
        workName: 'Komunitas E-Sport',
        desc: 'Membuat 1 channel di discord dan didalamnya ada server untuk mahasiswa/i bisa main bersama. Tujuannya agar menjaga kekompakan dan keseruan bersama.',
      },
      {
        workName: 'Informatika Bangga X Kominkraf',
        desc: 'Bekerja sama dengan KOMINKRAF, sebuah bentuk apreasiasi kepada keluarga Informatika yang mendapatkan prestasi atau juara baik dari bidang akademik maupun non-akademik dengan cara mempublikasi melalui instagram HMIF.',
      },
    ],
    photos: {
      desktop: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/mba/fullteam.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/mba/wakil.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/mba/ketua.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/mba/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/mba/anggota.JPG',
        },
      ],
      mobile: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/mba/fullteam.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/mba/ketua.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/mba/wakil.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/mba/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/mba/anggota.JPG',
        },
      ],
    },
  },
  {
    departmentName: 'KEAGAMAAN',
    shortDesc: 'Keagamaan',
    slug: 'keagamaan',
    work: [
      {
        workName: 'Postingan Keagamaan',
        desc: 'Proker rutin harian, mingguan dan bulanan ataupun setiap tanggal yang bertepatan dengan hari keagamaan',
      },
      {
        workName: 'Infaq Jum’at',
        desc: 'Menyalurkan infaq atau amal berupa materi setiap hari jum’at',
      },
      {
        workName: 'Buka Puasa Bersama',
        desc: 'Proker yang bertujuan untuk menjaga terjalinnya hubungan kekeluargaan  yang lebih dekat antara mahasiswa, dosen, dan juga staf jurusan Informatika.',
      },
      {
        workName: 'Kajian Islami',
        desc: 'Kajian Islami Spesial merupakan salah satu program kerja yang bertujuan untuk meningkatkan pengetahuan dan pemahaman kegamaan bagi seluruh anggota dan masyarakat umum.',
      },
      {
        workName: 'Informatika Menyapa Panti',
        desc: 'Kunjungan panti bertujuan untuk menumbuhkan rasa syukur dan simpati dan belajar untuk saling mengasihi sesama sekaligus peduli dengan lingkungan sekitar. proker ini berkolaborasi dengan departemen Sosmas.',
      },
      {
        workName: 'Maulid Nabi',
        desc: 'Peringatan Maulid Nabi Muhammad صلى الله عليه وسلم',
      },
    ],
    photos: {
      desktop: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/keagamaan/fullteam.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/keagamaan/wakil.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/keagamaan/ketua.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/keagamaan/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/keagamaan/anggota.JPG',
        },
      ],
      mobile: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/keagamaan/fullteam.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/keagamaan/ketua.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/keagamaan/wakil.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/keagamaan/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/keagamaan/anggota.JPG',
        },
      ],
    },
  },
  {
    departmentName: 'HUAL',
    shortDesc: 'Hubungan Antar Lembaga',
    slug: 'hual',
    work: [
      {
        workName: 'Informatika Kunjung Industri',
        desc: 'Kunjungan industri bertujuan untuk memberikan wawasan dan pengalaman langsung kepada mahasiswa mengenai dunia kerja di industri.',
      },
      {
        workName: 'Informatics Goes to School',
        desc: 'Program yang bertujuan untuk memberikan edukasi dan wawasan kepada siswa-siswa di sekolah mengenai dunia teknologi informasi.',
      },
      {
        workName: 'Podcast',
        desc: 'Podcast yang membahas berbagai topik menarik seputar dunia teknologi dan informatika.',
      },
      {
        workName: 'Suggestion Box',
        desc: 'Suggestion Box adalah wadah untuk menerima masukan, saran, dan kritik dari mahasiswa Informatika USK terkait kegiatan HMIF.',
      },
      {
        workName: 'Kunjungan Kerja Internal',
        desc: 'Kunjungan kerja internal bertujuan untuk meningkatkan kerjasama dan komunikasi antar anggota HMIF serta memperkuat hubungan dengan pihak internal kampus.',
      },
      {
        workName: 'Kunjungan Kerja Eksternal',
        desc: 'Kunjungan kerja eksternal bertujuan untuk menjalin kerjasama dan komunikasi dengan pihak luar kampus serta memperluas jaringan dan relasi HMIF.',
      },
    ],
    photos: {
      desktop: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/hual/fullteam.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/hual/wakil.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/hual/ketua.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/hual/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/hual/anggota.JPG',
        },
      ],
      mobile: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/hual/fullteam.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/hual/ketua.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/hual/wakil.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/hual/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/hual/anggota.JPG',
        },
      ],
    },
  },
  {
    departmentName: 'ADMINISTRASI',
    shortDesc: 'Administrasi',
    slug: 'administrasi',
    work: [
      {
        workName: 'Monitoring dan Evaluasi',
        desc: 'Kegiatan yang bertujuan untuk memantau dan mengevaluasi program-program yang telah dilaksanakan.',
      },
      {
        workName: 'Data Inventaris',
        desc: 'Melakukan pendataan seluruh inventaris HMIF dan sebagai penanggung jawab dari seluruh kegiatan peminjaman inventaris himpunan.',
      },
      {
        workName: 'Rekapitulasi LPJ',
        desc: 'Kegiatan yang bertujuan untuk merekapitulasi laporan pertanggungjawaban seluruh kegiatan HMIF.',
      },
      {
        workName: 'Rekapitulasi Surat Masuk dan Keluar',
        desc: 'Kegiatan yang bertujuan untuk merekapitulasi surat masuk dan keluar yang diterima oleh HMIF.',
      },
      {
        workName: 'Daftar Piket Ruang Sekretariat',
        desc: 'Kegiatan yang bertujuan untuk mencatat dan mengatur jadwal piket ruang sekretariat HMIF.',
      },
      {
        workName: 'Merchandise HMIF',
        desc: 'Kegiatan yang bertujuan untuk merancang, memproduksi, dan mendistribusikan merchandise resmi HMIF.',
      },
    ],
    photos: {
      desktop: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/administrasi/fullteam.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/administrasi/wakil.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/administrasi/ketua.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/administrasi/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/administrasi/anggota.JPG',
        },
      ],
      mobile: [
        {
          title: 'fullteam',
          imgUrl: '/images/department/administrasi/fullteam.JPG',
        },
        {
          title: 'ketua',
          imgUrl: '/images/department/administrasi/ketua.JPG',
        },
        {
          title: 'wakil',
          imgUrl: '/images/department/administrasi/wakil.JPG',
        },
        {
          title: 'sekretaris',
          imgUrl: '/images/department/administrasi/sekretaris.JPG',
        },
        {
          title: 'anggota',
          imgUrl: '/images/department/administrasi/anggota.JPG',
        },
      ],
    },
  },
];

export const department = new Map<string, IDepartment>(
  departmentList.map((department) => [department.slug, department])
);

// Utility function untuk mendapatkan project berdasarkan slug
export const getDepartmentBySlug = (slug: string): IDepartment | undefined => {
  return department.get(slug);
};
