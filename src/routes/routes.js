import express from "express"
import { createMahasiswa, getMahasiswa, updateMahasiswa, deleteMahasiswa, getMahasiswaByNim } from "../controller/mahasiswaController.js"

export const router = express.Router()

router.post('/api/mahasiswa', createMahasiswa)
router.get('/api/mahasiswa', getMahasiswa)
router.put('/api/mahasiswa', updateMahasiswa)
router.delete('/api/mahasiswa', deleteMahasiswa)
router.get('/api/mahasiswa/:nim', getMahasiswaByNim)