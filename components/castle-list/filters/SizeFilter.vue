<template>
    <div class="size-filter">
        <div class="title">
            {{ sizeTitle }}
        </div>
        <div class="dimensions">
            <div class="dim">
                <div class="dim-name">
                    Breite:
                </div>
                <input class="size-input" type="number" min="1" max="20" v-model="width">
                <div class="unit">
                    Meter
                </div>
            </div>
            <div class="dim">
                <div class="dim-name">
                    Höhe:
                </div>
                <input class="size-input" type="number" min="1" max="20" v-model="height">
                <div class="unit">
                    Meter
                </div>
            </div>
            <div class="dim">
                <div class="dim-name">
                    Länge:
                </div>
                <input class="size-input" type="number" min="1" max="20" v-model="length">
                <div class="unit">
                    Meter
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SizeFilter',
    data() {
        return {
            width: 5,
            height: 5,
            length: 5
        }
    },
    props: {
        sizeTitle: {
            type: String,
            required: true
        },
        initWidth: {
            type: Number,
            required: false
        },
        initHeight: {
            type: Number,
            required: false
        },
        initLength: {
            type: Number,
            required: false
        }
    },
    watch: {
        width() { this.emitSize() },
        height() { this.emitSize() },
        length() { this.emitSize() }
    },
    methods: {
        emitSize() {
            this.$emit('sizeChanged', {
                width: this.width,
                height: this.height,
                length: this.length
            })
        }
    },
    created() {
        this.width  = typeof this.initWidth  === 'number' ? this.initWidth  : this.width
        this.height = typeof this.initHeight === 'number' ? this.initHeight : this.height
        this.length = typeof this.initLength === 'number' ? this.initLength : this.length
    }
}
</script>

<style scoped>
.size-filter {
    padding: 5px 0;
    margin-right: 40px;
}

.dim {
    display: flex;
    padding: 2px 0;
    line-height: 28px;
}

.dim-name {
    width: 80px;
}

.size-input {
    border: none;
    padding: 0 10px;
    width: 80px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-right: none;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

.unit {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    width: 58px;
    text-align: center;
}
</style>