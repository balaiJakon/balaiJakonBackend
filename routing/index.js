const router = require('express').Router()
const users = require('./users')
const auth = require('./auth')
const masterPelatihan = require('./masterPelatihan')
const poolPelatihan = require('./poolPelatihan')
const document = require('./document')
const provinsi = require('./provinsi')
const excel = require('./excel')
const kabKota = require('./kabKota')
const DJBK = require('./DJBK')
const usersDJBK = require('./usersDJBK')
const usersMitra = require('./usersMitra')
const usersSiswa = require('./usersSiswa')
const usersPenggunaJasa = require('./usersPenggunaJasa')
const usersPJM = require('./usersPJM')
const usersPJTK = require('./usersPJTK')
const usersInstruktur = require('./usersInstruktur')
const sertifikatTKK = require('./sertifikatTKK')
const pengalamanKerja = require('./pengalamanKerja')
const pendidikanPelatihan= require('./pendidikanPelatihan')
const pengalamanMengajar = require('./pengalamanMengajar')
const organisasiPUPR = require('./organisasiPUPR')
const organisasiKL = require('./organisasiKL')
const lembaga = require('./lembaga')
const PJM = require('./PJM')
const dataKlasifikasi=require('./dataKlasifikasi')

router.use('/users',users)
router.use('/auth',auth)
router.use('/masterPelatihan',masterPelatihan)
router.use('/poolPelatihan',poolPelatihan)
router.use('/document',document)
router.use('/provinsi',provinsi)
router.use('/excel',excel)
router.use('/kabKota',kabKota)
router.use('/usersDJBK',usersDJBK)
router.use('/usersMitra',usersMitra)
router.use('/DJBK',DJBK)
router.use('/usersSiswa',usersSiswa)
router.use('/usersPenggunaJasa',usersPenggunaJasa)
router.use('/usersPJM',usersPJM)
router.use('/usersPJTK',usersPJTK)
router.use('/usersInstruktur',usersInstruktur)
router.use('/sertifikatTKK',sertifikatTKK)
router.use('/pengalamanKerja',pengalamanKerja)
router.use('/pendidikanPelatihan',pendidikanPelatihan)
router.use('/pengalamanMengajar',pengalamanMengajar)
router.use('/organisasiPUPR',organisasiPUPR)
router.use('/organisasiKL',organisasiKL)
router.use('/lembaga',lembaga)
router.use('/PJM',PJM)
router.use('/dataKlasifikasi',dataKlasifikasi)


module.exports=router