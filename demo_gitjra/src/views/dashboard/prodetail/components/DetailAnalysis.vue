<template>
    <el-row :gutter="16">
        <el-col style="margin: 10px 10px 10px 10px">
            <el-table :data="filterTableData" :default-sort="{ prop: 'number', order: 'descending' }"
                style="width: 98.5%; height: 600px;">
                <el-table-column type="index" width="50" />
                <el-table-column prop="name" label="姓名" />
                <el-table-column prop="address" label="merge次数" />
                <el-table-column prop="name" label="commits次数" width="" />
                <el-table-column prop="number" sortable label="增加行数" />
                <el-table-column prop="name" label="删除行数" width="" />
                <el-table-column prop="address" label="增量" />
                <el-table-column prop="name" label="评审条数" width="" />
                <el-table-column label="详情">
                    <template #header>
                        <el-input v-model="search" size="small" placeholder="Type to search" />
                    </template>
                    <template #default="scope">
                        <Dialog :scope=scope.row.name />
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Dialog from "./Dialog.vue";

const search = ref('')

const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        number: 10
    },
    {
        date: '2016-05-02',
        name: '张龙飞',
        address: 'No. 189, Grove St, Los Angeles',
        number: 10
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        number: 10
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        number: 10
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        number: 10
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        number: 10
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        number: 10
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        number: 10
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        number: 10
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        number: 1132
    },

]

</script>

<style lang="scss" scoped></style>
