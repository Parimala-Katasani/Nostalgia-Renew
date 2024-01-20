import Link from "next/link";

export default function Footer() {
	return (
		<div className={'flex-shrink-0 text-center text-md p-4 border-t bg-white'}>
			Created by {' '}
			<Link
				className={'text-purple-500'}
				href={"https://www.linkedin.com/in/parimala-katasani-487172271/ "}
				target={'_blank'}
				rel={'noopener noreferrer'}
			>
				Parimala Katasani
			</Link>
		</div>
	)
}