import { invoke } from '@tauri-apps/api/tauri'

let urlInputEl: HTMLInputElement | null
let urlMsgEl: HTMLElement | null

async function getURL() {
	if (urlMsgEl && urlInputEl) {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		urlMsgEl.textContent = await invoke('get_url', {
			url: urlInputEl.value,
		})
	}
}

window.addEventListener('DOMContentLoaded', () => {
	urlInputEl = document.querySelector('#url-input')
	urlMsgEl = document.querySelector('#url-msg')
	document.querySelector('#url-button')?.addEventListener('click', () => getURL())
})
