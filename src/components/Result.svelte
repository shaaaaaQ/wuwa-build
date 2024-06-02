<script lang="ts">
    import { draw } from "$lib";

    let canvas: HTMLCanvasElement;
    let showChild = false;
    export let chainFile: File | null;
    export let weaponFile: File | null;
    export let statusFile: File | null;
    export let skillFile: File | null;
    export let echo0File: File | null;
    export let echo1File: File | null;
    export let echo2File: File | null;
    export let echo3File: File | null;
    export let echo4File: File | null;

    $: (async () => {
        if (!canvas) return;
        console.log("render");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.fillStyle = "#162134";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // TODO ここより下をどうにかする

        const chainSx = 500;
        const chainSWidth = 1100; // 1920 - 右320 - 左sx

        if (chainFile) {
            await draw(
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
            await draw(
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
            await draw(
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
        const echoDx = chainSWidth;

        if (echo0File) {
            await draw(
                ctx,
                echo0File,
                echoSx,
                echoSy,
                echoSWidth,
                echoSHeight,
                echoDx + echoDWidth,
                0,
                echoDWidth,
                echoDHeight,
            );
        }
        if (echo1File) {
            await draw(
                ctx,
                echo1File,
                echoSx,
                echoSy,
                echoSWidth,
                echoSHeight,
                echoDx,
                echoDHeight,
                echoDWidth,
                echoDHeight,
            );
        }
        if (echo2File) {
            await draw(
                ctx,
                echo2File,
                echoSx,
                echoSy,
                echoSWidth,
                echoSHeight,
                echoDx + echoDWidth,
                echoDHeight,
                echoDWidth,
                echoDHeight,
            );
        }
        if (echo3File) {
            await draw(
                ctx,
                echo3File,
                echoSx,
                echoSy,
                echoSWidth,
                echoSHeight,
                echoDx,
                echoDHeight * 2,
                echoDWidth,
                echoDHeight,
            );
        }
        if (echo4File) {
            await draw(
                ctx,
                echo4File,
                echoSx,
                echoSy,
                echoSWidth,
                echoSHeight,
                echoDx + echoDWidth,
                echoDHeight * 2,
                echoDWidth,
                echoDHeight,
            );
        }

        if (skillFile) {
            // 1: 382, 336 + 440
            // 2: 614, 196 + 440
            // 3: 886, 130 + 440
            // 4: 1160, 196 + 440
            // 5: 1390, 336 + 440

            const skillSWidth = 148;
            const skillSHeight = 248;

            const skillDWidth = 129;
            const skillDHeight = 216;

            await draw(
                ctx,
                skillFile,
                382,
                336 + 440,
                skillSWidth,
                skillSHeight,
                1100 + 445 * 2,
                skillDHeight * 0,
                skillDWidth,
                skillDHeight,
            );
            await draw(
                ctx,
                skillFile,
                614,
                196 + 440,
                skillSWidth,
                skillSHeight,
                1100 + 445 * 2,
                skillDHeight * 1,
                skillDWidth,
                skillDHeight,
            );
            await draw(
                ctx,
                skillFile,
                886,
                130 + 440,
                skillSWidth,
                skillSHeight,
                1100 + 445 * 2,
                skillDHeight * 2,
                skillDWidth,
                skillDHeight,
            );
            await draw(
                ctx,
                skillFile,
                1160,
                196 + 440,
                skillSWidth,
                skillSHeight,
                1100 + 445 * 2,
                skillDHeight * 3,
                skillDWidth,
                skillDHeight,
            );
            await draw(
                ctx,
                skillFile,
                1390,
                336 + 440,
                skillSWidth,
                skillSHeight,
                1100 + 445 * 2,
                skillDHeight * 4,
                skillDWidth,
                skillDHeight,
            );
        }
    })();
</script>

<canvas
    width={1100 + 445 * 2 + 129}
    height={1080}
    class="max-w-full"
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
