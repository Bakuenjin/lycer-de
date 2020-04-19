<template>
    <div class="castle-filter" :style="sizeStyle">
        <div class="title" @click="visible = !visible">
            <div :class="['icon', !visible ? 'icon-rotate' : '']">
                <FontAwesomeIcon icon="chevron-down"></FontAwesomeIcon>
            </div>
            <div class="label">
                {{ title }}
            </div>
        </div>
        <div :class="['filters', visible ? 'filters-visible' : '']">
            <SearchFilter
                searchTitle="Suche"
                placeholder="Name der Hüpfburg eingeben..."
                @textChanged="handleTextChanged">
            </SearchFilter>
            <div class="size-filters">
                <SizeFilter
                    sizeTitle="Mindestgröße:"
                    :initWidth="1"
                    :initHeight="1"
                    :initLength="1"
                    @sizeChanged="handleMinSizeChanged">
                </SizeFilter>
                <SizeFilter
                    sizeTitle="Maxmimale Größe:"
                    :initWidth="20"
                    :initHeight="20"
                    :initLength="20"
                    @sizeChanged="handleMaxSizeChanged">
                </SizeFilter>
            </div>
        </div>
    </div>
</template>

<script>
import SearchFilter from './filters/SearchFilter'
import SizeFilter from './filters/SizeFilter'
import TagFilter from './filters/TagFilter'

export default {
    name: 'CastleFilter',
    components: {
        SearchFilter,
        SizeFilter,
        TagFilter
    },
    data() {
        return {
            visible: false,
            searchText: '',
            maxSize: {
                width: 5,
                height: 5,
                length: 5,
            },
            minSize: {
                width: 5,
                height: 5,
                length: 5,
            },
            tags: []
        }
    },
    computed: {
        title() {
            return 'Filteroptionen ' + (this.visible ? 'ausblenden' : 'einbleden')
        },
        currentFilters() {
            return {
                searchText: this.searchText,
                maxSize: this.maxSize,
                minSize: this.minSize,
                tags: this.tags
            }
        },
        sizeStyle() {
            return {
                height: this.visible ? 'auto' : '32px'
            }
        }
    },
    methods: {
        emitChanges() {
            this.$emit('filtersChanged', this.currentFilters)
        },
        handleTextChanged(text) {
            this.searchText = text
            this.emitChanges()
        },
        handleMaxSizeChanged(size) {
            this.maxSize = size
            this.emitChanges()
        },
        handleMinSizeChanged(size) {
            this.minSize = size
            this.emitChanges()
        },
    }
}
</script>

<style scoped>
.castle-filter {
    padding: 0 60px;
    overflow-y: hidden;
}

.icon {
    margin-right: 10px;
    min-width: 32px;
    text-align: center;
    transition-duration: 0.2s;
}

.label {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
}

.icon-rotate {
    transform: rotate(-90deg);
}

.title {
    display: flex;
    user-select: none;
    line-height: 32px;
    padding: 0 10px;
    font-size: 14pt;
    cursor: pointer;
    transition-duration: 0.2s;
    background-color: rgba(0, 0, 0, 0.05);
}

.title:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.filters {
    opacity: 0;
    transition: opacity 0.2s;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.05);
}

.filters-visible {
    opacity: 1 !important;
}

.size-filters {
    display: flex;
    flex-wrap: wrap;
}
</style>