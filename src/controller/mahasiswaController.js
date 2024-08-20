import prisma from "../libs/prisma.js";
import { response } from "../res/response.js";

export const createMahasiswa = async (req, res, next) => {
    try {
        const { nim, nama_lengkap, kelas, alamat } = req.body
        if (!nim || !nama_lengkap || !kelas || !alamat ) {
            return response(400, null, "Invalid input, harap isi kolom tidak boleh ada yang kosong", res)
        }

        const mahasiswa = await prisma.Mahasiswa.create({
             data: { nim, nama_lengkap, kelas, alamat } 
        })
        response(201, mahasiswa, "Data berhasil ditambahkan", res)

    } catch (error) {
        next(error)
    }
}

export const getMahasiswa = async (req, res, next) => {
    try {
        const mahasiswa = await prisma.Mahasiswa.findMany()
        response(200, mahasiswa, "Data berhasil diambil", res)
    } catch (error) {
        next(error)
    }
}

export const updateMahasiswa = async (req, res, next) => {
    try {
        const { nim, nama_lengkap, kelas, alamat } = req.body
        if (!nim || !nama_lengkap || !kelas || !alamat) {
            return response(400, null, "Harap isi input semua tidak boleh kosong", res)
        }

        const mahasiswa = await prisma.Mahasiswa.update({
            where: { nim: nim },
            data: { nama_lengkap, kelas, alamat }
        })
        response(201, mahasiswa, "Data berhasil di perbaharui", res)
    } catch (error) {
        next(error)
    }
}

export const deleteMahasiswa = async (req, res, next) => {
    try {
        const { nim } = req.body
        const mahasiswa = await prisma.Mahasiswa.delete({
            where: { nim: nim }
        })
        response(200, mahasiswa, "Data berhasil di hapus", res)
    } catch (error) {
        next(error)
    }
}

export const getMahasiswaByNim = async (req, res, next) => {
    try {
        const { nim } = req.params
        const nimINT = parseInt(nim, 10)
        if (!Number.isInteger(nimINT)) {
            return response(400, null, "Tidak di temukan", res)
        }
        const mahasiswa = await prisma.Mahasiswa.findUnique({
            where: { nim: nimINT }
        })
        if (!mahasiswa) {
            response(404, null, "Mahasiswa dengan NIM tersebut tidak ditemukan", res)
        }
        response(200, mahasiswa, "Data berhasil diambil berdasarkan NIM", res)
    } catch (error) {
        next(error)
    }
}   