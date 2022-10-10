import * as React from 'react';
import {SearchUser} from '../../../../util/types'
import {Avatar, Button, Flex, Stack, Text} from "@chakra-ui/react";

interface IUserSearchListProps {
    users: Array<SearchUser>
}

const UserSearchList: React.FC<IUserSearchListProps> = ({users}) => {
    return (
        <div>
            {users.length === 0 ? (
                <Flex mt={6} justifyContent='center'>
                    <Text>No users found</Text>
                </Flex>
            ) : (
                <Stack mt={6}>
                    {users.map(user => (
                        <Stack
                            key={user.id}
                            direction='row'
                            align='center'
                            spacing={4}
                            py={2}
                            px={4}
                            borderRadius={4}
                            _hover={{bg: 'whiteAlpha.200'}}
                        >
                            <Avatar/>
                            <Flex justify='space-between' align='center' width='100%'>
                                <Text color='whiteAlpha.700'>{user.username}</Text>
                                <Button bg='brand.100' _hover={{bg: 'brand.200'}} onClick={() => {
                                }}>Select</Button>
                            </Flex>
                        </Stack>
                    ))}
                </Stack>
            )}
        </div>
    );
};

export default UserSearchList;