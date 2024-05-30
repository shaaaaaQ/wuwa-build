<script lang="ts">
    export let file: File | null;
</script>

<div
    class="p-3 border-solid border-2 border-gray-600 focus:outline-none text-center"
    class:border-sky-400={file}
    on:paste|preventDefault={(e) => {
        e.clipboardData &&
            Array.from(e.clipboardData.files).forEach((item) => {
                if (item.type.startsWith("image/")) file = item;
            });
    }}
    contenteditable
>
    <slot />
</div>
