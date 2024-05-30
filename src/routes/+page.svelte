<script lang="ts">
    import PasteArea from "../components/PasteArea.svelte";
    import Result from "../components/Result.svelte";

    let statusFile: File | null;
    let chainFile: File | null;
    let weaponFile: File | null;
    let echo0File: File | null;
    let echo1File: File | null;
    let echo2File: File | null;
    let echo3File: File | null;
    let echo4File: File | null;
</script>

<div class="max-w-[50rem] mx-auto my-4 p-1">
    <div class="flex [&>div]:flex-1">
        <PasteArea bind:file={statusFile}>ステータス</PasteArea>
        <PasteArea bind:file={weaponFile}>武器</PasteArea>
        <PasteArea bind:file={chainFile}>共鳴チェーン</PasteArea>
    </div>
    <div class="flex [&>div]:flex-1 mb-4">
        <PasteArea bind:file={echo0File}>音骸1</PasteArea>
        <PasteArea bind:file={echo1File}>音骸2</PasteArea>
        <PasteArea bind:file={echo2File}>音骸3</PasteArea>
        <PasteArea bind:file={echo3File}>音骸4</PasteArea>
        <PasteArea bind:file={echo4File}>音骸5</PasteArea>
    </div>
    <Result
        {statusFile}
        {chainFile}
        {weaponFile}
        {echo0File}
        {echo1File}
        {echo2File}
        {echo3File}
        {echo4File}
    />
    <div class="mt-4">
        手抜きなので 1920 x 1080 フルスクリーンのみ対応<br />
        Alt + PrintScreenでゲーム画面を撮って上のやつに貼り付ける<br />
        canvasを右クリックしてコピーできる
    </div>
</div>
