<script lang="ts">
    import { draw } from "$lib";

    let canvas: HTMLCanvasElement;
    export let chainFile: File | null;
    export let weaponFile: File | null;
    export let statusFile: File | null;
    export let skillFile: File | null;
    export let echo0File: File | null;
    export let echo1File: File | null;
    export let echo2File: File | null;
    export let echo3File: File | null;
    export let echo4File: File | null;

    $: (() => {
        if (!canvas) return;
        console.log("render");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // ctx.fillStyle = "green";
        // ctx.fillRect(0, 0, canvas.width, canvas.height);

        // TODO ここより下をどうにかする
        // TODO スキルの上か下にダメバフとか表示したい

        const chainSx = 500;
        const chainSWidth = 1100; // 1920 - 右320 - 左sx

        if (chainFile) {
            draw(
                ctx,
                chainFile,
                chainSx,
                0,
                chainSWidth,
                1080,
                0,
                0,
                chainSWidth,
                1080,
            );
        }

        const statusSx = 174;
        const statusSy = 236;
        const statusSWidth = 420;
        const statusSHeight = 284;

        if (statusFile) {
            draw(
                ctx,
                statusFile,
                statusSx,
                statusSy,
                statusSWidth,
                statusSHeight,
                0,
                0,
                statusSWidth,
                statusSHeight,
            );
        }

        const weaponSx = 176;
        const weaponSy = 114;
        const weaponSWidth = 420;
        const weaponSHeight = 340;

        const weaponDWidth = 445;
        const weaponDHeight = 360;

        if (weaponFile) {
            draw(
                ctx,
                weaponFile,
                weaponSx,
                weaponSy,
                weaponSWidth,
                weaponSHeight,
                chainSWidth,
                0,
                weaponDWidth,
                weaponDHeight,
            );
        }

        const echoSx = 1414;
        const echoSy = 140;
        const echoSWidth = 420; // 1834 - sx
        const echoSHeight = 340; // 480 - sy

        const echoDWidth = 445; // dh / sh * sw
        const echoDHeight = 360; // 1080 / 3

        if (echo0File) {
            draw(
                ctx,
                echo0File,
                echoSx,
                echoSy,
                echoSWidth,
                echoSHeight,
                chainSWidth + echoDWidth,
                0,
                echoDWidth,
                echoDHeight,
            );
        }
        if (echo1File) {
            draw(
                ctx,
                echo1File,
                echoSx,
                echoSy,
                echoSWidth,
                echoSHeight,
                chainSWidth,
                echoDHeight,
                echoDWidth,
                echoDHeight,
            );
        }
        if (echo2File) {
            draw(
                ctx,
                echo2File,
                echoSx,
                echoSy,
                echoSWidth,
                echoSHeight,
                chainSWidth + echoDWidth,
                echoDHeight,
                echoDWidth,
                echoDHeight,
            );
        }
        if (echo3File) {
            draw(
                ctx,
                echo3File,
                echoSx,
                echoSy,
                echoSWidth,
                echoSHeight,
                chainSWidth,
                echoDHeight * 2,
                echoDWidth,
                echoDHeight,
            );
        }
        if (echo4File) {
            draw(
                ctx,
                echo4File,
                echoSx,
                echoSy,
                echoSWidth,
                echoSHeight,
                chainSWidth + echoDWidth,
                echoDHeight * 2,
                echoDWidth,
                echoDHeight,
            );
        }

        // 1: 382, 336
        // 2: 614, 196
        // 3: 886, 130
        // 4: 1160, 196
        // 5: 1390, 336

        const skillSWidth = 148;
        const skillSHeight = 698;

        const skillDWidth = 229;
        const skillDHeight = 1080;

        if (skillFile) {
            draw(
                ctx,
                skillFile,
                382,
                330,
                skillSWidth,
                skillSHeight,
                1100 + 445 * 2 + 229 * 0,
                0,
                skillDWidth,
                skillDHeight,
            );
            draw(
                ctx,
                skillFile,
                614,
                196,
                skillSWidth,
                skillSHeight,
                1100 + 445 * 2 + 229 * 1,
                0,
                skillDWidth,
                skillDHeight,
            );
            draw(
                ctx,
                skillFile,
                886,
                130,
                skillSWidth,
                skillSHeight,
                1100 + 445 * 2 + 229 * 2,
                0,
                skillDWidth,
                skillDHeight,
            );
            draw(
                ctx,
                skillFile,
                1160,
                196,
                skillSWidth,
                skillSHeight,
                1100 + 445 * 2 + 229 * 3,
                0,
                skillDWidth,
                skillDHeight,
            );
            draw(
                ctx,
                skillFile,
                1390,
                336,
                skillSWidth,
                skillSHeight,
                1100 + 445 * 2 + 229 * 4,
                0,
                skillDWidth,
                skillDHeight,
            );
        }
    })();
</script>

<canvas
    width={1100 + 445 * 2 + (skillFile ? 229 * 5 : 0)}
    height={1080}
    class="max-w-full bg-green-600"
    bind:this={canvas}
></canvas>

<div class="flex justify-end gap-4 mt-4">
    <button
        class="p-2 bg-gray-600 rounded-md transition-colors hover:bg-gray-500"
        on:click={() => {
            const a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = "wuwa-build.png";
            a.click();
        }}
    >
        ダウンロード
    </button>
</div>
