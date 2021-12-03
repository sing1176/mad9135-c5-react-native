import React from 'react';
import {
	Text,
	Center,
	Heading,
	VStack,
	HStack,
	Box,
	FlatList,
	Avatar,
	Spacer,
	Input
} from 'native-base';
import { useState } from 'react';

export default function ListScreen({ coins }) {

	const [search, setSearch] = useState('');

	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

    
	return (
		<VStack bg="black" safeArea>
			<Box>
				<Center pb="5" pt="3" color="gray.900">
					<Heading fontSize="xl" pt="6">
						<Text color="warning.600" fontSize="2xl">
							All Crypto Currencies
						</Text>
					</Heading>
				</Center>
				<Input
					variant="rounded"
					my="4"
					mx="3"
					placeholder="Search"
					onChangeText={(search) => setSearch(search)}
					defaultValue={search}
				/>
				<FlatList
					data={filteredCoins}
					renderItem={({ item }) => (
						<Box
							borderBottomWidth="1"
							borderColor="warning.600"
							pl="5"
							pr="5"
							py="3"
						>
							<HStack space={3} justifyContent="space-between">
								<Avatar
									size="50px"
									source={{
										uri: item.image,
									}}
								/>
								<VStack>
									<Text color="primary.50">{item.name}</Text>
									<Text color="primary.50">{item.symbol}</Text>
								</VStack>
								<Spacer />
								<Text fontSize="xs" color="primary.50">
									{item.current_price} USD
								</Text>
							</HStack>
						</Box>
					)}
					keyExtractor={(item) => item.id}
				/>
			</Box>
		</VStack>
	);
}
