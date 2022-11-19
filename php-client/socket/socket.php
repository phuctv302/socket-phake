<?php

	namespace socket;

	\AP::extlib('guzzle');
	use \GuzzleHttp\Client;
	use \GuzzleHttp\Exception\BadResponseException;

	class Socket {

		private const URI = 'localhost:3233/api/v1/socket';

		public function emit($event, $data){
			$client = new Client();

			$res = $client->request('POST', self::URI, [
				'json' => [
					'event' => 'message_from_server',
					'data' => (object)[
						'event' => $event,
						'data' => $data
					]
				]
			]);

			$body = json_decode($res->getBody());

			if ($body->status == 'success'){
				return true;
			}

			return false;
		}
	}

?>